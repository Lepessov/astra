"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {  getAllCroudFunding } from "@/services/auth";
import {  CFCard } from "../../page";
import { toast } from "sonner";
import { croudFundingCards, qaCards } from "@/data/mockdata";
import {Clock9} from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useUser } from "@/store/userContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CroudFundingPage: React.FC = () => {
  
  const [data, setData] = useState<CFCard[]>([]);
  const [loading, setLoading] = useState(true);
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if(user){
      getAllCroudFunding(user.token)
      .then((jsonData) => {
        setData(jsonData.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(croudFundingCards);
        toast('Error', {
          description: error.message
        });
        setLoading(false);
      });
    }
    else{
      router.replace("/login")
    }

    
  }, []);
    return (
      <div className="h-full overflow-auto flex flex-col bg-[#EBECF1] ">
        {/* <div className="bg-[#F2F5FF] w-[90%] mx-auto rounded-2xl my-2 p-5 text-left">
        <h2>English skills (B2 - Upper Intermediate)</h2>
        <p>1500 тг</p>
      
        <span>Возможен обмен Java skills</span> <br/>
        <span className="flex items-center"><Clock9/> 15:00 - 16:00 Mon/Wed/Fri</span> <br/>
        <Button  className="mx-auto min-w-52 window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
            Donate
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
              <div key={item.id} className="bg-[#F2F5FF] w-[90%] mx-auto rounded-2xl my-2 p-5 text-left relative">
                <h2 className="font-semibold text-base">{item.title}</h2>
                <p className="text-lg font-bold py-3">{item.planned_money} ₸</p>
              
                <span className="text-base">Earned {item.amount_money} ₸</span> <br/>
                <span className="text-sm flex items-center"><Clock9 className="pr-2"/> Due date: {item.created_at}</span> <br/>
                <Link href={`cf_posts/${item.id}`}>
                  <Button  className="mx-auto min-w-52 window-sm bg-[#212153] rounded-full text-white hover:bg-gray-400">
                      Donate
                  </Button>
                </Link>
                {item.photo && (
                  <div className="absolute right-5 top-0 bottom-0 my-auto hidden lg:flex items-center justify-end max-w-[35%] w-full max-h-[200px] h-auto ">
                    <Image  src={item.photo} width={300} height={200} className="rounded-lg my-auto  mt-2" alt="logo"/>
                  </div>
                )}
              </div>
          ))}
          </>
        )}
        
      </div>
    );
  }
  
  export default CroudFundingPage;
  