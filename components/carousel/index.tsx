"use client"
import * as React from "react"
import {useState} from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import CardItem from "../card"
import { toast } from 'sonner'
import { AlertTriangle } from "lucide-react";
import { AdCard, QACard } from "@/app/(marketing)/page"
import QACardItem from "../qaCard"




const Carousel = ({children} : {children:React.ReactNode}) => {
  const [showMore, setShowMore] = useState(false)

  const onEndScroll = () => {
    toast('To see more', {
      classNames: {
        description: 'pl-4',
        title: 'pl-4'
      },
      action: {
        label: 'Action',
        onClick: () => console.log('Action!'),
      },
      description: 'Click to this notification to see more',
      duration: 5000,
      icon: <AlertTriangle className="w-8 h-8 mr-6" fill="#FFB800" stroke="white" />,
    });

  };
  
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    const isEndReached = scrollLeft + clientWidth >= scrollWidth-100;
    if (isEndReached && !showMore) {
      onEndScroll();
      setShowMore(true)
    }
    else if(!isEndReached && showMore){
      setShowMore(false)
    }
  }

  return (
    <ScrollArea
      className="w-full whitespace-nowrap rounded-md pb-6"
     scrollEvent={handleScroll}
     type="scroll"
    >
      <div  className="flex w-max ml-0 p-4 px-0 md:px-4">
        {children}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default Carousel;
