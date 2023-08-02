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
import { Company } from "@/types/Company"
import DB from "@/config/DB"
import { updateCompany } from "@/utilities/company"

const formSchema = z.object({
  companyName: z.string().min(2).max(75),
  phoneNumber: z.string().min(10).max(17),
  addressStreet1: z.string(),
  addressStreet2: z.string(),
  addressCity: z.string(),
  addressState: z.string().min(0).max(2),
  addressZipcode: z.string().min(5),

})
const CompanyForm = ({ company }: { company: Company }) => {
  const dispatch = useAppDispatch();

  const { toast } = useToast()


  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: company.companyName,
      phoneNumber: company.phoneNumber,
      addressStreet1: company.addressStreet1,
      addressStreet2: company.addressStreet2,
      addressCity: company.addressCity,
      addressState: company.addressState,
      addressZipcode: company.addressZipcode
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // 'use server'
    // DB.collection('companies').update(company.id, values).then(result => {
    //   console.log(result)
    // }).catch(error => console.log(error));
    updateCompany(company.id, values as Company)
    
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
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder={company.companyName} {...field} />
              </FormControl>
              <FormDescription>
                The name of the company
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder={company.phoneNumber} {...field} />
              </FormControl>
              <FormDescription>
                In the format of +X (YYY) YYY-YYYY
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="addressStreet1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Street 1</FormLabel>
              <FormControl>
                <Input placeholder={company.addressStreet1} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="addressStreet2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Street 2</FormLabel>
              <FormControl>
                <Input placeholder={company.addressStreet2} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="addressCity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address City</FormLabel>
              <FormControl>
                <Input placeholder={company.addressCity} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="addressState"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address State</FormLabel>
              <FormControl>
                <Input placeholder={company.addressState} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="addressZipcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Zipcode</FormLabel>
              <FormControl>
                <Input placeholder={company.addressZipcode} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CompanyForm