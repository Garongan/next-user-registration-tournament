"use client"

import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";
import TeamNameFormField from "@/components/Form/team-name-form-field";
import CaptainUsernameFormField from "@/components/Form/captain-username-form-field";

const formSchema = z.object({
    teamName: z.string().min(4).max(15).regex(/^[a-zA-Z0-9_]+$/i, "Team name should only use alphabet, numbers, and underscore"),
    captainUsername: z.string().min(6).max(15).regex(/^[a-zA-Z0-9]+$/i, "Username should only use alphabet and numbers"),
    password: z.string().min(8).max(20)
})

export default function FormTournament() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            teamName: "",
            captainUsername: "",
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
            <h1 className="sm:text-2xl text-lg font-bold z-10">Tournament Registration</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-5 sm:pt-0">
                    <TeamNameFormField form={form}/>
                    <CaptainUsernameFormField form={form}/>
                    <p>Already have account?, please <Link href={"/sign-in"} className="underline text-blue-500 hover:text-white">sign in</Link></p>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}