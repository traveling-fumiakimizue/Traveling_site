'use client'

import { useActionState } from 'react'
import { contactFormAction } from '@/app/actions/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const initialState = {
    success: false,
    message: '',
    errors: {},
}

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(contactFormAction, initialState)

    if (state.success) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center flex items-center justify-center min-h-[400px]">
                <p className="text-[#FF0000] text-lg font-bold">
                    {state.message}
                </p>
            </div>
        )
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl text-foreground">
            <form action={formAction} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">お名前 <span className="text-red-500">*</span></label>
                    <Input id="name" name="name" placeholder="山田 太郎" className="bg-slate-50" required defaultValue={state.inputs?.name} />
                    {state.errors?.name && <p className="text-red-500 text-sm">{state.errors.name}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">メールアドレス <span className="text-red-500">*</span></label>
                    <Input id="email" name="email" type="email" placeholder="tarou.yamada@example.com" className="bg-slate-50" required defaultValue={state.inputs?.email} />
                    {state.errors?.email && <p className="text-red-500 text-sm">{state.errors.email}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">会社名</label>
                    <Input id="company" name="company" placeholder="株式会社Traveling" className="bg-slate-50" defaultValue={state.inputs?.company} />
                    {state.errors?.company && <p className="text-red-500 text-sm">{state.errors.company}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">お問い合わせ内容 <span className="text-red-500">*</span></label>
                    <Textarea id="message" name="message" placeholder="ご相談内容をご記入ください(1,000文字まで)" rows={5} className="bg-slate-50" required maxLength={1000} defaultValue={state.inputs?.message} />
                    {state.errors?.message && <p className="text-red-500 text-sm">{state.errors.message}</p>}
                </div>
                {state.message && !state.success && (
                    <p className="text-red-500 text-center">{state.message}</p>
                )}
                <Button type="submit" disabled={isPending} className="w-full font-bold bg-[#10385F] hover:bg-[#10385F]/90 text-lg py-6">
                    {isPending ? '送信中...' : '送信する'}
                </Button>
            </form>
        </div>
    )
}
