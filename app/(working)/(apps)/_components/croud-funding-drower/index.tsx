"use client";
import * as z from "zod";
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
import { Calendar } from "@/components/ui/calendar"
import { CalendarPlus } from "lucide-react"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { formSchemaSkillSwapFilter } from "@/form-schema";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";


const CroudFundingDrawer: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchemaSkillSwapFilter>>({
    resolver: zodResolver(formSchemaSkillSwapFilter),
    defaultValues: {
        sort_type:"",
        start_date:undefined,
        end_date:undefined,
        start_cost:"0",
        end_cost:"0",
    },
  });

  const handleSubmit =  (values: z.infer<typeof formSchemaSkillSwapFilter>) => {
    const existingParams = Object.fromEntries(new URLSearchParams(window.location.search));
    console.log("Existing Params:", existingParams);    const formattedStartDate = values.start_date?format(values.start_date, 'y-MM-dd'):"undefined";
    const formattedEndDate = values.end_date?format(values.end_date, 'y-MM-dd'):"undefined";
    const queryParams = new URLSearchParams({
      ... existingParams,
      sort_type: values.sort_type,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      start_cost: values.start_cost,
      end_cost: values.end_cost,
      query: "filter"
    }).toString();

  router.push(`?${queryParams}`);
  };

  

  
  return (
      <Form {...form}>
        croud_funding
        {/* <button onClick={()=>{setUser({id:1,name:"me",email:"AA@gmail.com"})}}>{user?.name}</button> */}
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col h-[80vh] items-center justify-between w-[400px]"
        >
          <div className="h-[380px] flex flex-col justify-around">
          <FormField
            control={form.control}
            name="sort_type"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Sort by</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                    <SelectTrigger className="w-[400px] bg-[#F2F5FF]">
                    <SelectValue placeholder="Select sort type" />
                    </SelectTrigger>
                        </FormControl>
                    <SelectContent>
                        <SelectItem value="asc_cost">Ascending Cost</SelectItem>
                        <SelectItem value="desc_cost">Descending Cost</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              );
            }}
          />
          <div className="flex flex-row  max-w-5xl justify-between w-full mx-auto">
          <FormField
          control={form.control}
          name="start_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[180px] bg-[#F2F5FF] border-none pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'y-MM-dd')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarPlus className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[180px] bg-[#F2F5FF] border-none pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarPlus className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        
          </div>
          
          <div className="flex flex-col md:flex-row  max-w-5xl justify-between w-full mx-auto">
          <FormField
            control={form.control}
            name="start_cost"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>ENTER PASSWORD</FormLabel>
                  <FormControl>
                    <Input
                    className="w-[180px] bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                    placeholder="number"
                    type="number" {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              );
            }}
          />
        <FormField
            control={form.control}
            name="end_cost"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>ENTER PASSWORD</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[180px] bg-[#F2F5FF] border-none focus-visible:ring-0 focus-visible:ring-transparent  focus-visible:ring-offset-0   text-black"
                      placeholder="number"
                      type="number" {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          </div>
          </div>
          
          <Button  type="submit" className="mx-auto w-full window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
            Find
          </Button>
        </form>
      </Form>
  );
}

export default CroudFundingDrawer;












//   <div>  
//             <h1>Category</h1>
//             <Search/>
//             <form action="" onSubmit={handleSubmit}>
//             <Select>
//                 <SelectTrigger className="w-[280px]">
//                     <SelectValue placeholder="Select sort type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                     <SelectItem value="asc_cost">Ascending Cost</SelectItem>
//                     <SelectItem value="desc_cost">Descending Cost</SelectItem>
//                     <SelectItem value="newest">Newest</SelectItem>
//                 </SelectContent>
//             </Select>
//             <Button  type="submit" className="max-w-72 mx-auto w-full window-sm bg-gray-300 text-black hover:bg-gray-400">
//                 Find
//             </Button>
//             </form>

//         </div>