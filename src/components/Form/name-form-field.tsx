import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";

interface NameFormFieldProps {
    form: any;
    fieldName: string;
    label: string;
}

const NameFormField: React.FC<NameFormFieldProps> = ({form, fieldName, label}) => {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="name" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

export default NameFormField;