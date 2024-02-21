"use client"
import * as React from "react"
import {useState,useEffect} from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import CardItem from "../../card"
import { toast } from 'sonner'
import { AlertTriangle } from "lucide-react"
import { AdCard } from "@/app/(marketing)/page"



const adCards: AdCard[] = [
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
// const qaCards: QACard[] = [
//   {
//       id: 1,
//       avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
//       author: "Alice",
//       title: "What is the capital of France?",
//       description: "I need to know the capital of France for my geography quiz.",
//       created: "8:59 PM Feb 18,2024"
//   },
//   {
//       id: 2,
//       avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
//       author: "Bob",
//       title: "How does photosynthesis work?",
//       description: "I'm studying biology and I'm curious about the process of photosynthesis.",
//       created: "8:59 PM Feb 18,2024"
//   },
//   {
//       id: 3,
//       avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
//       author: "Charlie",
//       title: "What is the main function of the liver?",
//       description: "I'm studying anatomy and I need to understand the role of the liver in the human body.",
//       created: "8:59 PM Feb 18,2024"
//   },
//   {
//       id: 4,
//       avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
//       author: "David",
//       title: "What are some common programming languages?",
//       description: "I'm new to programming and I want to know which languages are commonly used.",
//       created: "8:59 PM Feb 18,2024"
//   },
//   {
//       id: 5,
//       avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
//       author: "Eve",
//       title: "How does the stock market work?",
//       description: "I want to start investing in stocks but I'm not sure how the stock market operates.",
//       created: "8:59 PM Feb 18,2024"
//   }
// ];

const SkillSwapCarousel = () => {
  const [data, setData] = useState<(AdCard)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.example.com/skill_funds`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        setData(adCards);
        
        toast('error',{
          description:error.message
        })
        setLoading(false);
      });
  }, []);

  return (
    <ScrollArea
      className="w-full whitespace-nowrap rounded-md pb-6 md:min-h-52"
      type="scroll"
    >
      <div  className="flex w-max ml-0 p-4 px-0 md:px-4">
        {data.map((item) => !loading ? (
          <CardItem key={item.id} cardColor={'bg-white'} info={item} />
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
