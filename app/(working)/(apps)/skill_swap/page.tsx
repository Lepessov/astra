"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {  getFiveCroudFunding, getFiveQA, getFiveSkillSwap } from "@/services/auth";
import {  CFCard, QACard, SSCard } from "../../page";
import { toast } from "sonner";
import { croudFundingCards, qaCards, skillSwapCards } from "@/data/mockdata";
import {Clock9} from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useUser } from "@/store/userContext";

const SkillSwapPage: React.FC = () => {
  const [data, setData] = useState<SSCard[]>([]);
  const [loading, setLoading] = useState(true);
  const {user} = useUser();


  useEffect(() => {
    if(user){
      console.log(user,'true')
      getFiveSkillSwap(user.token)
        .then((jsonData) => {
          setData(jsonData.data);
          setLoading(false);
        })
        .catch((error) => {
          setData(skillSwapCards);
          toast('Error', {
            description: error.message
          });
          setLoading(false);
        });}
        else{
          console.log(user,'false')

        }
  }, []);
    return (
      <div className="h-[500px]  overflow-auto flex flex-col bg-[#EBECF1] ">
        {/* <div className="bg-[#F2F5FF] w-[90%] mx-auto rounded-2xl my-2 p-5 text-left">
        <h2>English skills (B2 - Upper Intermediate)</h2>
        <p>1500 тг</p>
      
        <span>Возможен обмен Java skills</span> <br/>
        <span className="flex items-center"><Clock9/> 15:00 - 16:00 Mon/Wed/Fri</span> <br/>
        <Button  className="mx-auto min-w-52 window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
            Respond
          </Button>
        </div>
        <div className="bg-[#F2F5FF] w-[90%] mx-auto rounded-2xl my-2 p-5 text-left">
        <h2>English skills (B2 - Upper Intermediate)</h2>
        <p>1500 тг</p>
      
        <span>Возможен обмен Java skills</span> <br/>
        <span className="flex items-center"><Clock9/> 15:00 - 16:00 Mon/Wed/Fri</span> <br/>
        <Button  className="mx-auto min-w-52 window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
            Respond
          </Button>
        </div>
        <div className="bg-[#F2F5FF] w-[90%] mx-auto rounded-2xl my-2 p-5 text-left">
        <h2>English skills (B2 - Upper Intermediate)</h2>
        <p>1500 тг</p>
      
        <span>Возможен обмен Java skills</span> <br/>
        <span className="flex items-center"><Clock9/> 15:00 - 16:00 Mon/Wed/Fri</span> <br/>
        <Button  className="mx-auto min-w-52 window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
            Respond
          </Button>
        </div> */}
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
                <span className="flex items-center"><Clock9/> {item.created_at}</span> <br/>
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
  
  export default SkillSwapPage;
  