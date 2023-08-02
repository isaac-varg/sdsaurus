"use client"

import { useRouter } from "next/navigation"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { TbX } from "react-icons/tb"
import { HazardComponent } from "@/types/HazardComponent"
import { addComponent, removeComponent, updateComponent } from "@/utilities/hazardousComponents"
const formSchema = z.object({
    components: z.array(
        z.object({
            uuid: z.string(),
            name: z.string().min(2),
            casNumber: z.string(),
            concentrationRange: z.string().min(2),
        })
    ),
});


const ComponentsForm = ({components} : {components: [HazardComponent]}) => {

    const { toast } = useToast()

    const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            components: components
        }
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'components',
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {


        console.log(values)

        values.components.forEach(component => {
            if (component.uuid) {
                // update
                updateComponent(component.uuid, component);
            } else {
                // create new component
                addComponent(component);
            }
        })
        toast({
            variant: "success",
            title: "Success!",
            description: "The components have been added"
        })
        router.refresh();
    }

    const addComponentRow = () => {
        append({ uuid: "", name: "", casNumber: "", concentrationRange: "" });
    };

    return (
        <>
            <Button className="mb-6" onClick={addComponentRow}>
                Add Component
            </Button>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    {fields.map((field, index) => (
                        <div className="flex space-x-6 items-end mb-4" key={field.id}>
                            <FormField
                                control={form.control}
                                name={`components.${index}.name`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Component Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter component name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`components.${index}.casNumber`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CAS #</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter a CAS #" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name={`components.${index}.concentrationRange`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Concentration</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter concentration range" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flexalign-text-bottom">
                                <Button variant={"destructive"} onClick={() => { 
                                    if (fields[index].uuid) {
                                        removeComponent(fields[index].uuid);
                                        remove(index);
                                    } else {
                                        remove(index) 
                                    }
                                    }}>
                                    <TbX />
                                </Button>
                            </div>

                        </div>
                    ))}

                    {/* <FormField
                        control={form.control}
                        name="productCode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Code</FormLabel>
                                <FormControl>
                                    <Input placeholder={stateProductCode} {...field} />
                                </FormControl>
                                <FormDescription>
                                    The product code or SKU
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}

                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </>

    )
}

export default ComponentsForm