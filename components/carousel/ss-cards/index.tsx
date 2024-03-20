"use client"
import * as React from "react"
import {useState,useEffect} from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import SSCardItem from "../../ss-card"
import { toast } from 'sonner'
import { SSCard } from "@/app/(marketing)/page"
import { skillSwapCards } from "@/data/mockdata"
import { getFiveSkillSwap } from "@/services/auth"


const SkillSwapCarousel = () => {
  const [data, setData] = useState<(SSCard)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFiveSkillSwap()
      .then((jsonData) => {
        setData(jsonData.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(skillSwapCards);
        
        toast('error',{
          description:error.message
        })
        setLoading(false);
      });
  }, []);

  return (
    <ScrollArea
      className="w-full whitespace-nowrap rounded-md sm:pb-6 md:min-h-52"
      type="scroll"
    >
      <div  className="flex w-max ml-0 p-4 px-0 md:px-4 text-sm sm:text-lg">
        {skillSwapCards.map((item) => !loading ? (
          <SSCardItem key={item.id} cardColor={'bg-white'} info={item} />
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

export default SkillSwapCarousel;
