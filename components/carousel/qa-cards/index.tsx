"use client"
import * as React from "react"
import {useState,useEffect} from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertTriangle } from "lucide-react"
import { QACard } from "@/app/(marketing)/page"
import QACardItem from "@/components/qaCard"
import { toast } from 'sonner'
import { qaCards } from "@/data/mockdata"
import { getFiveQA } from "@/services/auth"



const QACarousel = () => {
  const [data, setData] = useState<(QACard)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFiveQA()
      .then((jsonData) => {
        setData(jsonData.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(qaCards);
        
        toast('error',{
          description:error.message
        })
        setLoading(false);
      });
  }, []);

  return (
    <ScrollArea
      className="w-full whitespace-nowrap rounded-md pb-6 md:min-h-96"
      type="scroll"
    >
      <div  className="flex w-max ml-0 p-4 px-0 md:px-4 text-sm sm:text-lg">
        {qaCards.map((item) => !loading ? (
            <div key={item.id} className="flex">
          <QACardItem cardColor={'bg-white'} info={item} />

            </div>
        ): (
            <div key={item.id} className="flex flex-col space-y-3 mx-6">
      <Skeleton className="h-[185px] w-[400px] rounded-xl bg-neutral-300"/>
      <div className="space-y-2">
        <Skeleton className="h-6 w-[400px] bg-neutral-300" />
        <Skeleton className="h-6 w-[320px] bg-neutral-300" />
      </div>
    </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default QACarousel;
