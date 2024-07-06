"use client"

import PropTypes from "prop-types";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import React from "react";

export default function GenderFormField(form: any){
    return(
        <FormField
            control={form.control}
            name="gender"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-1"
                        >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="Man"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    Man
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="Woman"/>
                                </FormControl>
                                <FormLabel className="font-normal">Woman</FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

GenderFormField.propTypes = {
    form: PropTypes.object.isRequired
}