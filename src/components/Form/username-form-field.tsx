"use client"

import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";
import PropTypes from "prop-types";

export default function UsernameFormField(form: any){
    return (
        <FormField
            control={form.control}
            name="username"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

UsernameFormField.propTypes = {
    form: PropTypes.object.isRequired
}