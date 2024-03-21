"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormIcon,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/store/userContext";
import { useRouter } from "next/navigation";
import {  formSchemaNewFormCF } from "@/form-schema";
import BtnTypes from "../btn-type";


type FormValues = z.infer<typeof formSchemaNewFormCF>;

// Define the type for the handleSubmit function
type SubmitHandler = (values: FormValues) => Promise<void>;

const CreateNewFormCF = ({handleSubmit}:{handleSubmit:SubmitHandler}) => {
  const form = useForm<z.infer<typeof formSchemaNewFormCF>>({
    resolver: zodResolver(formSchemaNewFormCF),
    defaultValues: {
      photo: undefined,
      content:"",
      amount_money:"",
      planning_money:"",
      title:""
    },
  });

  const {setUser} = useUser();
  const router = useRouter()
  // const handleSubmit = async (values: z.infer<typeof formSchemaNewFormCF>) => {
  // //   const loginResult = await loginUser(values);
  // //   if (loginResult.success) {
  // //     setUser(loginResult.data);
  // //     console.log("User logged in successfully:", loginResult);
  // //     router.replace("/")

  // //   } else {
  // //     setUser({
  // //       name:"TestName",
  // //       photo:"",
  // //       token:"TestToken",
  // //       student_id:123,
  // //       email:"Test@gmail.com",
  // //       is_student:true,
  // //     });
  // //     router.replace("/")
  // //     console.error("Login failed:", loginResult.error);
  // //   }
  // console.log(values)
  //   };


  return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className=" flex flex-col mt-5 w-full mx-auto justify-around"
        >
          <h3 className="text-center font-bold my-5">New</h3>
          <div className=" w-[90%] flex-col flex  justify-between mx-auto">
            
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                    className="my-2 w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="title"
                    type="text" {...field}
                    />
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Photo</FormLabel>
                  <FormControl>
                    <Input
                    className="my-2 w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    id="picture" type="file" 
            onChange={(e) => field.onChange(e.target.files)}
            onBlur={field.onBlur}
            name={field.name}
            ref={field.ref}
                    />
                    
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                    className="my-2 w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="content"
                    type="text" {...field}
                    />
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="amount_money"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Amount Money</FormLabel>
                  <FormControl>
                    <Input
                    className="my-2 w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="amount money"
                    type="number" {...field}
                    />
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="planning_money"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Planning Money</FormLabel>
                  <FormControl>
                    <Input
                    className="my-2 w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="planning money"
                    type="number" {...field}
                    />
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
    
    
          
          </div>
          
          <Button  type="submit" className=" mt-5 max-w-96 mx-auto w-full window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
            LOGIN
          </Button>

          
        </form>
      </Form>
  );
}

export default CreateNewFormCF;
