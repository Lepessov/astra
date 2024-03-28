"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {  getAllCroudFunding, getAllQA, getAllSkillSwap } from "@/services/auth";
import { toast } from "sonner";
import { skillSwapCards } from "@/data/mockdata";
import {Clock9} from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useUser } from "@/store/userContext";
import { useRouter } from "next/navigation";
import { SSCard } from "@/app/(working)/page";

const SkillSwapView: React.FC = () => {
  
  const [data, setData] = useState<SSCard[]>([]);
  const [loading, setLoading] = useState(true);
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if(user){
      getAllSkillSwap(user.token)
      .then((jsonData) => {
        setData(jsonData.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(skillSwapCards);
        toast('Error', {
          description: error.message
        });
        setLoading(false);
      });
    }

    
  }, []);
    return (
      <div className="flex flex-col bg-[#EBECF1] ">
        <div className="flex min-w-96 w-1/2 justify-between pl:0 sm:pl-14">
          <p className=" text-base font-bold">Skill Swap</p>
          <Link href="/skill_swap">
            <p className=" text-base ">see all</p>
          </Link>
        </div>
        {loading?(
        <>
            <div className="flex flex-col my-2 space-y-3">
                <Skeleton className=" w-[90%] mx-auto bg-slate-500 rounded-xl"> 
                <Skeleton className="h-4 w-[90%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[90%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[40%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[20%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[30%] mx-auto bg-slate-100 m-5" />
                </Skeleton> 
            </div>
            <div className="flex flex-col my-2 space-y-3">
            <Skeleton className=" w-[90%] mx-auto bg-slate-500 rounded-xl"> 
                <Skeleton className="h-4 w-[90%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[90%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[40%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[20%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[30%] mx-auto bg-slate-100 m-5" />
            </Skeleton> 
            </div>
            <div className="flex flex-col my-2 space-y-3">
            <Skeleton className=" w-[90%] mx-auto bg-slate-500 rounded-xl"> 
                <Skeleton className="h-4 w-[90%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[90%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[40%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[20%] mx-auto bg-slate-100 m-5" />
                <Skeleton className="h-4 w-[30%] mx-auto bg-slate-100 m-5" />
            </Skeleton> 
            </div>
        </>
        ):(
          <>
            {data.map(item => (
              <div key={item.id} className="bg-[#F2F5FF] w-[90%] mx-auto rounded-2xl my-2 p-5 text-left">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              
                <span>Description</span> <br/>
                <Link href={`ss_posts/${item.id}`}>
                  <Button  className="mx-auto min-w-52 window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
                      Respond
                  </Button>
                </Link>
              </div>
          ))}
          </>
        )}
        
      </div>
    );
  }
  
  export default SkillSwapView;
  