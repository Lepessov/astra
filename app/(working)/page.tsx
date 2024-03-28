
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
    title:string,
    content:string,
    category:string[],
    amount_money:number,
    planned_money:number,
    created_at:string,
    updated_at:string,
    photo?:string
}
export interface QACard {
    id:number,
    author_photo?:string,
    author_name:string,
    title:string,
    description:string,
    category:string[],
    rating:number,
    comment:number,
    created_at:string,
    updated_at:string,
}
export interface SSCard {
    id:number,
    title:string,
    content:string,
    category:string[],
    price:number,
    photo?:string
}




const MarketingPage = () => {
    
  return (
    <div className="text-sky-500 pt-14 text-center">
        {/* <div className="flex items-center absolute top-12 left-5">
            <FilterButton options={options} type="Filter"/>
            <FilterButton options={options} type="Sort"/>
        </div> */}
        
            <h2 className="text-xl sm:text-2xl text-black text-shadow sm:mt-6 mt-2">Crowd Funding</h2>
        
        
    </div>
  );
}
export default MarketingPage;
