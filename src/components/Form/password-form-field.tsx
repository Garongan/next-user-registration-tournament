"use client"

import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";
import PropTypes from "prop-types";

export default function PasswordFormField(form: any) {
    return (
        <FormField
            control={form.control}
            name="password"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input placeholder="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}/>
    )
}

PasswordFormField.propTypes = {
    form: PropTypes.object.isRequired
}