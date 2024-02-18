import Image from "next/image";
import Carousel from "@/components/carousel"
import { FilterButton } from "./_components/filter-button";


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
const MarketingPage = () => {
  return (
    <div className="text-sky-500 pt-14 text-center">
        <div className="flex items-center absolute top-12 left-5">
            <FilterButton options={options} type="Filter"/>
            <FilterButton options={options} type="Sort"/>
        </div>
        <h2 className="text-2xl text-black text-shadow mt-6">Crowd Funding</h2>
        <Carousel />
        <div className="bg-gray-200 mt-12 p-6">
        <h2 className="text-2xl text-black text-shadow ">Skill Swap</h2>
        <Carousel />
        </div>
        <h2 className="text-2xl text-black text-shadow mt-6">Question Answer</h2>
        <Carousel />
    </div>
  );
}
export default MarketingPage;
