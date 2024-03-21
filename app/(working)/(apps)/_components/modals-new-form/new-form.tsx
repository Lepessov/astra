import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import * as z from "zod";
import { Input } from "@/components/ui/input"
import CreateNewFormCF from "./croud-funding-form"
import BtnTypes from "./btn-type"
import { formSchemaNewFormCF } from "@/form-schema";

export function CreateNew() {
  const handleSubmit = async (values: z.infer<typeof formSchemaNewFormCF>) => {
    //   const loginResult = await loginUser(values);
    //   if (loginResult.success) {
    //     setUser(loginResult.data);
    //     console.log("User logged in successfully:", loginResult);
    //     router.replace("/")
  
    //   } else {
    //     setUser({
    //       name:"TestName",
    //       photo:"",
    //       token:"TestToken",
    //       student_id:123,
    //       email:"Test@gmail.com",
    //       is_student:true,
    //     });
    //     router.replace("/")
    //     console.error("Login failed:", loginResult.error);
    //   }
    console.log(values)
      };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='rounded-full bg-gray-600 min-w-20 hover:bg-blue'>+ New</Button>
      </DialogTrigger>
      <DialogContent className="">
        <BtnTypes/>
        <CreateNewFormCF handleSubmit={handleSubmit}/>
      </DialogContent>
    </Dialog>
  )
}
