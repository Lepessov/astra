"use client"
import * as React from "react"
import {useState} from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import CardItem from "../card"
import { toast } from 'sonner'
import { AlertTriangle } from "lucide-react";


export interface AdCard {
    id:number,
    img:string,
    price:string,
    title:string,
    location:string,
}

export const works: AdCard[] = [
  {
    id:1,
    img: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
    price: "$1500 until project launch",
    location: "Banff National Park, Alberta, Canada",
    title: "Ornella Binni",
  },
  {
    id:2,
    price: "$1500 until project launch",
    location: "Banff National Park, Alberta, Canada",
    title: "Tom Byrom",
    img: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
  },
  {
    id:3,
    price: "$1500 until project launch",
    location: "Banff National Park, Alberta, Canada",
    title: "Vladimir Malyavko",
    img: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
  },
  {
    id:4,
    price: "$1500 until project launch",
    location: "Banff National Park, Alberta, Canada",
    title: "Vladimir Malyavko",
    img: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
  },
  {
    id:5,
    price: "$1500 until project launch",
    location: "Banff National Park, Alberta, Canada",
    title: "Vladimir Malyavko",
    img: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
  },
]

const Carousel = () => {
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
    >
      <div  className="flex w-max ml-0 p-4">
        {works.map((item) => (
          <CardItem key={item.id} info={item} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default Carousel;
