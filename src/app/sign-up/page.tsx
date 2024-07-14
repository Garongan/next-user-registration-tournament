"use client"

import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button"
import React from "react";
import Link from "next/link";
import UsernameFormField from "@/components/Form/username-form-field";
import PasswordFormField from "@/components/Form/password-form-field";
import PhoneFormField from "@/components/Form/phone-form-field";
import NameFormField from "@/components/Form/name-form-field";

const formSchema = z.object({
    name: z.string().min(3).max(50).regex(/^[a-zA-Z\s]+$/i, "Name should only use alphabet and space"),
    phone: z.string().min(7).max(14).regex(/^\+[0-9]\d{1,14}$/, "Phone number should be valid"),
    username: z.string().min(6).max(15).regex(/^[a-zA-Z0-9]+$/i, "Username should only use alphabet and numbers"),
    password: z.string().min(8).max(20)
})

export default function Page() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            username: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="grid sm:grid-cols-2">
            <h1 className="sm:text-2xl text-lg font-bold z-10">Account Sign Up</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-5 sm:pt-0">
                    <NameFormField form={form} fieldName="name" label="Name"/>
                    <PhoneFormField form={form} fieldName="phone" label="Phone Number"/>
                    <UsernameFormField form={form}/>
                    <PasswordFormField form={form}/>
                    <p>Already have account?, please <Link href={"/sign-in"} className="underline text-blue-500 hover:text-white">sign in</Link></p>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}