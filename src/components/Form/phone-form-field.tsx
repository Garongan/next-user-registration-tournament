"use client"

import PropTypes from "prop-types";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";

export default function PhoneFormField(form: any){
    return (
        <FormField
            control={form.control}
            name="phone"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="phone number" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

PhoneFormField.propTypes = {
    form: PropTypes.object.isRequired
}