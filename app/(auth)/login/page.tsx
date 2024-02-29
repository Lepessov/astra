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
import { redirect } from 'next/navigation';

const formSchema = z
  .object({
    email: z.string().min(1),
    password: z.string().min(3)
  })



const LoginPage: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const {setUser} = useUser();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const loginResult = await loginUser(values);
    if (loginResult.success) {
      // Set the user data if login is successful
      setUser(loginResult.data);
      console.log("User logged in successfully:", loginResult);
      redirect("/")
    } else {
      // Handle login error
      console.error("Login failed:", loginResult.error);
    }
  };


  return (
    <main className="h-screen lg:px-20">
      <h1 className="text-7xl text-center m-0">Log In</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-h-[650px] h-full flex flex-col justify-around"
        >
          <div className="flex-col h-48 flex justify-between max-w-5xl w-[50vw] mx-auto">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>CORPORATIVE EMAIL ADDRESS</FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-0 focus-visible:ring-transparent rounded-none focus-visible:ring-offset-0 border-transparent border-b-zinc-500 text-black"
                      placeholder="Email address"
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
                  <FormLabel>ENTER PASSWORD</FormLabel>
                  <FormControl>
                    <Input
                    className="focus-visible:ring-0 focus-visible:ring-transparent rounded-none focus-visible:ring-offset-0 border-transparent border-b-zinc-500 text-black"
                    placeholder="Password"
                    type="password" {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          
          </div>
         
          <Button  type="submit" className="max-w-72 mx-auto w-full window-sm bg-gray-300 text-black hover:bg-gray-400">
            LOGIN
          </Button>

          <div className="flex-col h-48 my-7 flex items-center justify-between max-w-5xl w-[50vw] mx-auto">
          <Button  type="submit" className="max-w-72 mx-auto w-full window-sm bg-gray-300 text-black hover:bg-gray-400">
            REGISTER
          </Button>
          <div className="border w-96  border-black"></div>
          <Button  type="submit" className="max-w-72 mx-auto w-full window-sm bg-gray-300 text-black hover:bg-gray-400">
            FORGOT PASSWORD
          </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}

export default LoginPage;
