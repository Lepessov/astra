import Carousel from "@/components/carousel"
import { FilterButton } from "./_components/filter-button";
import CardItem from "@/components/card";
import QACardItem from "@/components/qaCard";


const options = [
    {
        title: "1title",
        value: "1value"
    },
    {
        title: "2title",
        value: "2value"
    },
    {
        title: "3title",
        value: "3value"
    },
    {
        title: "4title",
        value: "4value"
    },
    {
        title: "5title",
        value: "5value"
    },
]


export interface AdCard {
    id:number,
    img:string,
    price:string,
    title:string,
    location:string,
}
export interface QACard {
    id:number,
    avatar:string,
    author:string,
    title:string,
    description:string,
    created:string,
}

const works: AdCard[] = [
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
const qaCards: QACard[] = [
    {
        id: 1,
        avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
        author: "Alice",
        title: "What is the capital of France?",
        description: "I need to know the capital of France for my geography quiz.",
        created: "8:59 PM Feb 18,2024"
    },
    {
        id: 2,
        avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
        author: "Bob",
        title: "How does photosynthesis work?",
        description: "I'm studying biology and I'm curious about the process of photosynthesis.",
        created: "8:59 PM Feb 18,2024"
    },
    {
        id: 3,
        avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
        author: "Charlie",
        title: "What is the main function of the liver?",
        description: "I'm studying anatomy and I need to understand the role of the liver in the human body.",
        created: "8:59 PM Feb 18,2024"
    },
    {
        id: 4,
        avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
        author: "David",
        title: "What are some common programming languages?",
        description: "I'm new to programming and I want to know which languages are commonly used.",
        created: "8:59 PM Feb 18,2024"
    },
    {
        id: 5,
        avatar:"https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png",
        author: "Eve",
        title: "How does the stock market work?",
        description: "I want to start investing in stocks but I'm not sure how the stock market operates.",
        created: "8:59 PM Feb 18,2024"
    }
];



const MarketingPage = () => {
  return (
    <div className="text-sky-500 pt-14 text-center">
        <div className="flex items-center absolute top-12 left-5">
            <FilterButton options={options} type="Filter"/>
            <FilterButton options={options} type="Sort"/>
        </div>
        <div>
            <h2 className="text-2xl text-black text-shadow mt-6">Crowd Funding</h2>
            <Carousel>
                {works.map((item) => (
                    <CardItem key={item.id} cardColor={'bg-gray-200'} info={item} />
                ))}
            </Carousel>
        </div>
        
        <div className="bg-gray-200 mt-12 py-6">
            <h2 className="text-2xl text-black text-shadow ">Skill Swap</h2>
            <Carousel>
                {works.map((item) => (
                    <CardItem key={item.id} cardColor={'bg-white'} info={item} />
                ))}
            </Carousel>
        </div>
        <div>
            <h2 className="text-2xl text-black text-shadow mt-6">Question Answer</h2>
            <Carousel>
                <div className="flex text-start">
                    {qaCards.map((item) => (
                        <QACardItem key={item.id} cardColor={'bg-white'} info={item} />
                    ))}
                </div>
            </Carousel>
        </div>
        
    </div>
  );
}
export default MarketingPage;
