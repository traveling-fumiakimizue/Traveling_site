'use server'

import { z } from 'zod'
// import nodemailer from 'nodemailer'

const schema = z.object({
    name: z.string().min(1, { message: 'お名前を入力してください' }),
    email: z.string().email({ message: '有効なメールアドレスを入力してください' }),
    company: z.string().optional(),
    message: z.string().min(1, { message: 'お問い合わせ内容を入力してください' }),
})

export type FormState = {
    success: boolean
    message?: string
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
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, company, message } = validatedFields.data

    try {
        /*
        // SMTP configuration
        // In a real application, these should be environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.example.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'user',
                pass: process.env.SMTP_PASS || 'pass',
            },
        })
        */

        // For development/demonstration without actual SMTP credentials,
        // we'll log the email to the console.
        console.log('--- Email Sending Simulation ---')
        console.log('To: fumiaki.mizue@traveling.co.jp')
        console.log('Subject: 【株式会社Traveling】お問い合わせがありました')
        console.log(`Name: ${name}`)
        console.log(`Email: ${email}`)
        console.log(`Company: ${company || '(未入力)'}`)
        console.log(`Message: \n${message}`)
        console.log('--------------------------------')

        /*
        // Only attempt to send if environment variables are present to avoid timeout/errors
        if (process.env.SMTP_HOST) {
            await transporter.sendMail({
                from: process.env.SMTP_FROM || '"Website Contact" <no-reply@traveling.co.jp>',
                to: 'fumiaki.mizue@traveling.co.jp',
                subject: '【株式会社Traveling】お問い合わせがありました',
                text: `
    お名前: ${name}
    会社名: ${company || '(未入力)'}
    メールアドレス: ${email}
    
    お問い合わせ内容:
    ${message}
        `,
            })
        }
        */

        return {
            success: true,
            message: 'お申し込みありがとうございます。2営業日以内にご連絡いたします。',
        }
    } catch (error) {
        console.error('Email sending failed:', error)
        return {
            success: false,
            message: '送信中にエラーが発生しました。時間をおいて再度お試しください。',
        }
    }
}
