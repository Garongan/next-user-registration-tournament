"use client"

import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormItem, FormLabel} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import React from "react";
import TeamNameFormField from "@/components/Form/team-name-form-field";
import {Separator} from "@/components/ui/separator";
import NameFormField from "@/components/Form/name-form-field";
import PhoneFormField from "@/components/Form/phone-form-field";
import GenderFormField from "@/components/Form/gender-form-field";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const formSchema = z.object({
    teamName: z.string().min(4).max(15).regex(/^[a-zA-Z0-9_]+$/i, "Team name should only use alphabet, numbers, and underscore"),
    captainName: z.string().min(3).max(50).regex(/^[a-zA-Z\s]+$/i, "Captain name should only use alphabet and space"),
    captainPhone: z.string().min(7).max(14).regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Captain phone number should be valid"),
    memberName: z.string().min(3).max(50).regex(/^[a-zA-Z\s]+$/i, "Member name should only use alphabet and space"),
    memberPhone: z.string().min(7).max(14).regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Member phone number should be valid"),
    captainGender: z.enum(["Man", "Woman"]),
    memberGender: z.enum(["Man", "Woman"]),
})

export default function FormTournament() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            teamName: "",
            captainName: "",
            captainPhone: "",
            memberName: "",
            memberPhone: ""
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-5 sm:pt-0 pb-48">
                    <TeamNameFormField form={form}/>
                        <Accordion type="single" defaultValue="captain">
                            {/* for captain */}
                            <AccordionItem value="captain">
                                <AccordionTrigger>
                                    <FormLabel>Captain Section</FormLabel>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-8">
                                        <NameFormField form={form} fieldName="captainName" label="Captain Name"/>
                                        <PhoneFormField form={form} fieldName="captainPhone"
                                                        label="Captain Phone Number"/>
                                        <GenderFormField form={form} fieldName="captainGender" label="Captain Gender"/>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            {/* for member */}
                            <AccordionItem value="member">
                                <AccordionTrigger>
                                    <FormLabel>Member Section</FormLabel>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-8">
                                        <NameFormField form={form} fieldName="memberName" label="Member Name"/>
                                        <PhoneFormField form={form} fieldName="memberPhone"
                                                        label="Member Phone Number"/>
                                        <GenderFormField form={form} fieldName="memberGender" label="Member Gender"/>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}