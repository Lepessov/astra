
import SkillSwapCarousel from "@/components/carousel/ss-cards";
import { FilterButton } from "./_components/filter-button";
import CrowdFundingCarousel from "@/components/carousel/cf-cards";
import QACarousel from "@/components/carousel/qa-cards";


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


export interface CFCard {
    id:number,
    student_id:number,
    photo:string,
    content:string,
    amount_money:number,
    planning_money:number,
    status:boolean,
    title:string,
    created_at:string,
    updated_at:string
}
export interface QACard {
    id:number,
    avatar:string,
    author:string,
    title:string,
    description:string,
    created:string,
}
export interface SSCard {
    id:number,
    student_id:number,
    photo:string,
    content:string,
    status:boolean,
    title:string,
    created_at:string,
    updated_at:string
}




const MarketingPage = () => {
    
  return (
    <div className="text-sky-500 pt-14 text-center">
        {/* <div className="flex items-center absolute top-12 left-5">
            <FilterButton options={options} type="Filter"/>
            <FilterButton options={options} type="Sort"/>
        </div> */}
        <div>
            <h2 className="text-xl sm:text-2xl text-black text-shadow sm:mt-6 mt-2">Crowd Funding</h2>
            <CrowdFundingCarousel/>
        </div>
        
        <div className="bg-gray-200 sm:mt-12 py-3 sm:py-6">
            <h2 className="text-xl sm:text-2xl text-black text-shadow sm:mt-6 mt-2">Skill Swap</h2>
            <SkillSwapCarousel/>
        </div>
        <div>
            <h2 className="text-xl sm:text-2xl text-black text-shadow sm:mt-6 mt-2">Question Answer</h2>
            <QACarousel />
        </div>
        
    </div>
  );
}
export default MarketingPage;
