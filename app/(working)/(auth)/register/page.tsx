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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import CheckboxRadioGroup from "@/components/checkbox-radio-group";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { useUser } from "@/store/userContext";
import { registerUser } from "@/services/auth";
import { useRouter } from 'next/navigation';
import { formSchemaRegistration } from "@/form-schema";




export interface CheckboxGenderOptions {
    option:"Male"|"Female"|"Other",
    value:"Male"|"Female"|"Other",
    id:string
}
const checkboxOptions:CheckboxGenderOptions[] = [
    {
        option: "Male",
        value: "Male",
        id:"genderMale"
    },
    {
        option: "Female",
        value: "Female",
        id:"genderFemale"
    },
    {
        option: "Other",
        value: "Other",
        id:"genderOther"
    },
]
const RegisterPage: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<"Male" | "Female" | "Other">("Male");
  const form = useForm<z.infer<typeof formSchemaRegistration>>({
    resolver: zodResolver(formSchemaRegistration),
    defaultValues: {
      name:"",
      lastname:"",
      university:"",
      course:"",
      faculty:"",
      speciality:"",
      emailAddress: "",
      password: "",
      passwordConfirm: "",
      gender:"Male",
      agreement:true,
      contact_number:""
    },
  });

  const accountType = form.watch("accountType");

  const router = useRouter()
  const handleSubmit = async (values: z.infer<typeof formSchemaRegistration>) => {
    values.gender = selectedGender;
    const registerResult = await registerUser(values);
    if (registerResult.success) {
      // Set the user data if login is successful
      console.log("User logged in successfully:", registerResult);
      router.replace("/login")
    } else {
      // Handle login error
      console.error("Register failed:", registerResult);
    }
  };

  const handleChangeGender = (e:any) =>{
    setSelectedGender(e.target.value)
  }

  
  return (
    <main className="h-screen lg:px-20">
      <Form {...form}>
        {/* <button onClick={()=>{setUser({id:1,name:"me",email:"AA@gmail.com"})}}>{user?.name}</button> */}
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-[90vw] sm:w-[50vw] mx-auto flex flex-col justify-around"
        >
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-xs sm:text-base">Account type</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an account type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              );
            }}
          />
          <CheckboxRadioGroup onChange={handleChangeGender} selectedOption={selectedGender} options={checkboxOptions}/>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem className=" min-w-32">
                    <FormLabel className="text-xs sm:text-base">ENTER NAME</FormLabel>
                    <FormControl>
                      <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                        placeholder="Name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormIcon/>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => {
                return (
                  <FormItem className=" min-w-32">
                    <FormLabel className="text-xs sm:text-base">ENTER LASTNAME</FormLabel>
                    <FormControl>
                      <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                        placeholder="Lastame"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormIcon/>
                  </FormItem>
                );
              }}
            />
          
          {accountType=="student" && (
            <div className="">   
              <FormField
              control={form.control}
              name="university"
              render={({ field }) => {
                return (
                  <FormItem className=" min-w-32">
                    <FormLabel className="text-xs sm:text-base">ENTER YOUR UNIVERSITY</FormLabel>
                    <FormControl>
                      <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                        placeholder="Sdu"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormIcon/>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => {
                return (
                  <FormItem className=" min-w-32">
                    <FormLabel className="text-xs sm:text-base">ENTER COURSE</FormLabel>
                    <FormControl>
                      <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                        placeholder="4"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormIcon/>
                  </FormItem>
                );
              }}
            />
              
              
              <FormField
              control={form.control}
              name="faculty"
              render={({ field }) => {
                return (
                  <FormItem className=" min-w-32">
                    <FormLabel className="text-xs sm:text-base">ENTER FACULTY</FormLabel>
                    <FormControl>
                      <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                        placeholder="engineering"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormIcon/>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="speciality"
              render={({ field }) => {
                return (
                  <FormItem className=" min-w-32">
                    <FormLabel className="text-xs sm:text-base">ENTER SPECIALITY</FormLabel>
                    <FormControl>
                      <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                        placeholder="information system"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormIcon/>
                  </FormItem>
                );
              }}
            />
              
            
            </div>
          )}
          
              <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => {
              return (
                <FormItem className=" min-w-32">
                  <FormLabel className="text-xs sm:text-base">EMAIL ADDRESS</FormLabel>
                  <FormControl>
                    <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="Email address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="contact_number"
            render={({ field }) => {
              return (
                <FormItem className=" min-w-32">
                  <FormLabel className="text-xs sm:text-base">CONTUCT NUMBER</FormLabel>
                  <FormControl>
                    <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="+7 700 800 60 70"
                    type="tel" {...field}
                    />
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
            
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem className=" min-w-32">
                  <FormLabel className="text-xs sm:text-base">ENTER PASSWORD</FormLabel>
                  <FormControl>
                    <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="Password"
                    type="password" {...field}
                    />
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => {
              return (
                <FormItem className=" min-w-32">
                  <FormLabel className="text-xs sm:text-base">CONFIRM PASSWORD</FormLabel>
                  <FormControl>
                    <Input
                    className="w-full bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="Password confirm"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormIcon/>
                </FormItem>
              );
            }}
          />
          
          
          
          <FormField
          control={form.control}
          name="agreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs sm:text-base">
                  Use different settings for my agreement devices
                </FormLabel>
              </div>
                
            </FormItem>
          )}
        />
          <Button  type="submit" className="max-w-72 mx-auto w-full window-sm bg-gray-300 text-black hover:bg-gray-400">
            REGISTER
          </Button>
        </form>
      </Form>
    </main>
  );
}

export default RegisterPage;
