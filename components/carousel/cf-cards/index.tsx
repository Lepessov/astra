"use client"
import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import {useState,useEffect} from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import CFCardItem from "../../cf-card"
import { toast } from 'sonner'
import { croudFundingCards } from "@/data/mockdata"
import { CFCard } from "@/app/(marketing)/page"
import { getFiveCroudFunding } from "@/services/auth"



const CrowdFundingCarousel = () => {
  const [data, setData] = useState<CFCard[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    getFiveCroudFunding()
      .then((jsonData) => {
        setData(jsonData.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(croudFundingCards);
        toast('Error', {
          description: error.message
        });
        setLoading(false);
      });
  }, []);

  return (
    <ScrollArea
      className="w-full whitespace-nowrap rounded-md sm:pb-6 md:min-h-64"
      type="scroll"
    >
      <div  className="flex w-max ml-0 p-4 px-0 md:px-4 text-sm sm:text-lg">
        {loading && (
          <div className="flex">
            <div className="flex flex-col space-y-3 mx-6">
              <Skeleton className="h-[185px] w-[400px] rounded-xl bg-neutral-300"/>
              <div className="space-y-2">
                <Skeleton className="h-6 w-[400px] bg-neutral-300" />
                <Skeleton className="h-6 w-[320px] bg-neutral-300" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 mx-6">
              <Skeleton className="h-[185px] w-[400px] rounded-xl bg-neutral-300"/>
              <div className="space-y-2">
                <Skeleton className="h-6 w-[400px] bg-neutral-300" />
                <Skeleton className="h-6 w-[320px] bg-neutral-300" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 mx-6">
              <Skeleton className="h-[185px] w-[400px] rounded-xl bg-neutral-300"/>
              <div className="space-y-2">
                <Skeleton className="h-6 w-[400px] bg-neutral-300" />
                <Skeleton className="h-6 w-[320px] bg-neutral-300" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 mx-6">
              <Skeleton className="h-[185px] w-[400px] rounded-xl bg-neutral-300"/>
              <div className="space-y-2">
                <Skeleton className="h-6 w-[400px] bg-neutral-300" />
                <Skeleton className="h-6 w-[320px] bg-neutral-300" />
              </div>
            </div>
          </div>
        )}
        {croudFundingCards.map((item) => (
          <CFCardItem key={item.id} cardColor={'bg-white'} info={item} />
        ) )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CrowdFundingCarousel;
