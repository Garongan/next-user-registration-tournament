"use client"

import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";
import PropTypes from "prop-types";

export default function CaptainUsernameFormField(form: any){
    return (
        <FormField
            control={form.control}
            name="captainUsername"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Captain Username</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="captaion username" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

CaptainUsernameFormField.propTypes = {
    form: PropTypes.object.isRequired
}