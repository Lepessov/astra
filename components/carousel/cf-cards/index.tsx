"use client"
import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import {useState,useEffect} from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import CFCardItem from "../../cf-card"
import { toast } from 'sonner'
import { AlertTriangle } from "lucide-react"
import { CFCard } from "@/app/(marketing)/page"


// id:number,
//     student_id:number,
//     title:string,
//     photo:string,
//     content:string,
//     status:boolean,
//     amount_money:number,
//     planning_money:number,
//     created_at:Date | null,
//     updated_at:Date | null
const CFCards: CFCard[] = [
  {
    id:1,
    student_id:1,
    photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
    content: "$1500 until project launch",
    amount_money:1000,
    planning_money:100000,
    status: true,
    title: "Ornella Binni",
    created_at:null,
    updated_at:null
  },
  {
    id:2,
    student_id:1,
    content: "$1500 until project launch",
    amount_money:1000,
    planning_money:100000,
    status: true,
    title: "Tom Byrom",
    photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
    created_at:null,
    updated_at:null
  },
  {
    id:3,
    student_id:1,
    content: "$1500 until project launch",
    amount_money:1000,
    planning_money:100000,
    status: true,
    title: "Vladimir Malyavko",
    photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
    created_at:null,
    updated_at:null
  },
  {
    id:4,
    student_id:1,
    content: "$1500 until project launch",
    amount_money:1000,
    planning_money:100000,
    status: true,
    title: "Vladimir Malyavko",
    photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
    created_at:null,
    updated_at:null
  },
  {
    id:5,
    student_id:1,
    content: "$1500 until project launch",
    amount_money:1000,
    planning_money:100000,
    status: true,
    title: "Vladimir Malyavko",
    photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
    created_at:null,
    updated_at:null
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

const CrowdFundingCarousel = () => {
  const [data, setData] = useState<CFCard[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(CFCards);
        toast('Error', {
          description: error.message
        });
        setLoading(false);
      });
  }, []);

  return (
    <ScrollArea
      className="w-full whitespace-nowrap rounded-md pb-6 md:min-h-64"
      type="scroll"
    >
      <div  className="flex w-max ml-0 p-4 px-0 md:px-4">
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
        {data.map((item) => (
          <CFCardItem key={item.id} cardColor={'bg-white'} info={item} />
        ) )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CrowdFundingCarousel;
