import PropTypes from "prop-types";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";

export default function TeamNameFormField(form: any){
    return (
        <FormField
            control={form.control}
            name="teamName"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="team name" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

TeamNameFormField.propTypes = {
    form: PropTypes.object.isRequired
}