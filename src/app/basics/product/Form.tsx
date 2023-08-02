"use client"

import { useRouter } from "next/navigation"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { store } from "@/redux/store"
import { infoActions, selectProductCode } from "@/redux/infoSlice"
import { selectProductName } from "@/redux/infoSlice"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  productName: z.string().min(2).max(75),
  productCode: z.string().min(4).max(50),
})
const ProductForm = () => {
  const dispatch = useAppDispatch();



  const stateProductName = useAppSelector(selectProductName)
  const stateProductCode = useAppSelector(selectProductCode)

  const { toast } = useToast()


  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: stateProductName,
      productCode: stateProductCode,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    dispatch(infoActions.setProductName(values.productName))
    dispatch(infoActions.setProductCode(values.productCode))
    toast({
      variant: "success",
      title: "Success!",
      description: "The product info have been updated."
    })
    router.refresh();


  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder={stateProductName} {...field} />
              </FormControl>
              <FormDescription>
                The name of the product
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
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
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ProductForm