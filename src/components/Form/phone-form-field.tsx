import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";

interface PhoneFormFieldProps {
    form: any,
    fieldName: string,
    label: string
}
const PhoneFormField: React.FC<PhoneFormFieldProps> = ({form, fieldName, label}) => {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="phone number" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

export default PhoneFormField;