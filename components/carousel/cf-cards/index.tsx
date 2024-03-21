"use client"
import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import {useState,useEffect} from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import CFCardItem from "../../cf-card"
import { toast } from 'sonner'
import { croudFundingCards } from "@/data/mockdata"
import { getFiveCroudFunding } from "@/services/auth"



const CrowdFundingCarousel = () => {
  const [loading, setLoading] = useState(true);



  return (
    <></>
  );
};

export default CrowdFundingCarousel;
