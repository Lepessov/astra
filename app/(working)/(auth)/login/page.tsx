"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/services/auth";
import { useUser } from "@/store/userContext";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { formSchemaLogin } from "@/form-schema";




const LoginPage: React.FC = () => {
  const form = useForm<z.infer<typeof formSchemaLogin>>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const {setUser} = useUser();
  const router = useRouter()
  const handleSubmit = async (values: z.infer<typeof formSchemaLogin>) => {
    const loginResult = await loginUser(values);
    if (loginResult.success) {
      setUser(loginResult.data);
      console.log("User logged in successfully:", loginResult);
      router.replace("/")

    } else {
      setUser({
        name:"TestName",
        photo:"",
        token:"TestToken",
        student_id:123,
        email:"Test@gmail.com",
        is_student:true,
      });
      router.replace("/")
      console.error("Login failed:", loginResult.error);
    }
  };


  return (
    <main className="lg:px-20 flex flex-col h-screen justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className=" flex flex-col h-48 mb-16 justify-around"
        >
          <div className="flex-col flex h-28 justify-between max-w-5xl w-[50vw] mx-auto">
            
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="E-mail"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="Password"
                    type="password" {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          
          </div>
          
          <Button  type="submit" className=" max-w-96 mx-auto w-full window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
            LOGIN
          </Button>

          
        </form>
      </Form>
    </main>
  );
}

export default LoginPage;
