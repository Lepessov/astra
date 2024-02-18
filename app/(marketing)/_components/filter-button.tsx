"use client"

import qs from "query-string";
import { useRouter } from "next/navigation";


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const FilterButton = ({options,type}:{options:{title:string,value:string}[],type:'Filter'|'Sort'}) => {
    const router = useRouter();

    const onChange = (e: string) => {

        // if(!value) return;

        const url = qs.stringifyUrl({
            url: '/',
            query: {[type]:e},
        },{skipEmptyString:true})

        router.push(url);
    };


    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-[85px] h-[35px] text-black border-2 border-gray-400 border-opacity-50 inset shadow-lg m-3 rounded-2xl">
                <SelectValue placeholder={type} />
            </SelectTrigger>
            <SelectContent>
                {options.map(item => (
                    <SelectItem key={item.value} value={item.value}>{item.title}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

