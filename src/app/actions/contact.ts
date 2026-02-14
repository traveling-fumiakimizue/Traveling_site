'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'
import nodemailer from 'nodemailer'

const schema = z.object({
    name: z.string().trim().min(1, { message: 'お名前を入力してください' }).max(100, { message: 'お名前は100文字以内で入力してください' }),
    email: z.string().trim().email({ message: '有効なメールアドレスを入力してください' }),
    company: z.string().trim().max(100, { message: '会社名は100文字以内で入力してください' }).optional(),
    message: z.string().trim().min(1, { message: 'お問い合わせ内容を入力してください' }).max(1000, { message: 'お問い合わせ内容は1000文字以内に収めてください' }),
})

export type FormState = {
    success: boolean
    message?: string
    inputs?: {
        name?: string
        email?: string
        company?: string
        message?: string
    }
    errors?: {
        name?: string[]
        email?: string[]
        company?: string[]
        message?: string[]
    }
}

export async function contactFormAction(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    // Collect raw inputs to return if needed
    const rawData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        company: formData.get('company') as string,
        message: formData.get('message') as string,
    }

    // 1. Honeypot check
    const honeypot = formData.get('website')
    if (honeypot) {
        // Pretend success to fool bots
        return {
            success: true,
            message: 'お申し込みありがとうございます。2営業日以内にご連絡いたします。',
        }
    }

    // 2. Rate Limiting
    const cookieStore = await cookies()
    const lastSubmitted = cookieStore.get('contact_form_last_submitted')
    if (lastSubmitted) {
        const lastTime = Number(lastSubmitted.value)
        if (Date.now() - lastTime < 60 * 1000) { // 1 minute
            return {
                success: false,
                message: '短時間での連続送信は制限されています。しばらく時間をおいてから再度お試しください。',
                inputs: rawData
            }
        }
    }

    // Sanitization
    let sanitizedMessage = rawData.message
    if (typeof sanitizedMessage === 'string') {
        sanitizedMessage = sanitizedMessage.replace(/<[^>]*>?/gm, '')
    }

    // Validation
    const validatedFields = schema.safeParse({ ...rawData, message: sanitizedMessage })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            inputs: rawData
        }
    }

    const { name, email, company, message } = validatedFields.data

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        const mailOptions = {
            from: process.env.SMTP_FROM || `"Website Contact" <${process.env.SMTP_USER}>`,
            to: 'fumiaki.mizue@traveling.co.jp',
            subject: '【株式会社Traveling】お問い合わせがありました',
            text: `
お名前: ${name}
会社名: ${company || '(未入力)'}
メールアドレス: ${email}
    
お問い合わせ内容:
${message}
            `,
        }

        const autoReplyOptions = {
            from: process.env.SMTP_FROM || `"株式会社Traveling" <${process.env.SMTP_USER}>`,
            to: email, // Send to the inquirer
            subject: '【株式会社Traveling】お問い合わせを受け付けました',
            text: `
この度は、株式会社Travelingにお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

担当者より2営業日以内にご返信させていただきますので、今しばらくお待ちいただけますようお願い申し上げます。

--------------------------------------------------
お名前：
${name}

会社名：
${company || '(未入力)'}

メールアドレス：
${email}

お問い合わせ内容：
${message}
--------------------------------------------------

株式会社Traveling
https://www.traveling.co.jp
            `,
        }

        await transporter.sendMail(mailOptions)
        await transporter.sendMail(autoReplyOptions)

        cookieStore.set('contact_form_last_submitted', Date.now().toString(), {
            maxAge: 60 * 60,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        })

        return {
            success: true,
            message: 'お問い合わせありがとうございます。担当より2営業日以内にご返信いたします',
        }
    } catch (error) {
        console.error('Email sending failed Details:', error)
        return {
            success: false,
            message: '送信中にエラーが発生しました。時間をおいて再度お試しください。',
            inputs: rawData
        }
    }
}
