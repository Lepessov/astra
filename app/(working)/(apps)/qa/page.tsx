"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {  getAllQA } from "@/services/auth";
import {  QACard } from "../../page";
import { toast } from "sonner";
import { qaCards } from "@/data/mockdata";
import {ArrowBigUp, ArrowBigDown, MessageCircle} from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useUser } from "@/store/userContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Avatarka from "@/assets/photo/noAvatarka.svg"

const QAPage: React.FC = () => {
  const [data, setData] = useState<QACard[]>([]);
  const [loading, setLoading] = useState(true);
  const {user} = useUser();
  const router = useRouter();


  useEffect(() => {
    if(user){
      getAllQA(user.token)
            .then((jsonData) => {
              setData(jsonData.data.data);
              setLoading(false);
            })
            .catch((error) => {
              setData(qaCards);
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.author_photo?(
                      <Image  src={item.author_photo} width={40} height={40} className="rounded-full" alt="logo"/>
                    ):(
                      <Image  src={Avatarka} width={40} height={40} className="rounded-full" alt="logo"/>
                    )}
                    <span className="px-5 text-lg font-bold">
                      {item.author_name}
                    </span>
                  </div>
                  <span>{item.created_at}</span>
                </div>
                <p className="py-1 font-bold text-base">{item.title}</p>
                <p className="py-1 text-base">{item.description}</p>
                
                <div className="flex items-center py-5">
                  <div className=" flex items-center p-1 px-2 mr-5">
                    <span className="flex items-center p-1 px-2 pr-5 border-gray-300 border-2 rounded-s-full">
                      <ArrowBigUp/> {item.rating}
                    </span>
                    <span className="border-gray-300 border-2 rounded-e-full p-1 px-2 border-l-0">
                      <ArrowBigDown/>
                    </span>
                  </div>

                  <div className=" border-gray-300 border-2 rounded-full flex items-center p-1 px-2">
                    <MessageCircle/> {item.comment} comments
                  </div>
                </div>

                <Link href={`qa_posts/${item.id}`}>
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
  
  export default QAPage;
  