"use client"

import qs from "query-string";
import { ReactNode, useState } from "react";
import {SearchIcon, X} from "lucide-react";
import { useRouter,usePathname, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const Search = ({Icon=<></>}:{Icon?:ReactNode}) => {
    const router = useRouter();
    const pathName = usePathname();
    const sParams = useSearchParams();

    const [value,setValue] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if(!value) return;

        const url = qs.stringifyUrl({
            url: `${pathName}/`,
            query: {query:value},
        },{skipEmptyString:true})
        sParams.forEach(item => {
            console.log(item)
        })
    
        router.push(url);
    };


    return (
        <form
        onSubmit={(e) => onSubmit(e)}
        className="relative w-full sm:w-[400px] flex items-center"
        >
            <Button
            type="submit"
            size="sm"
            variant="secondary"
            className="absolute left-0 bg-transparent">
                <SearchIcon className="h-5 w-5 text-muted-foreground"/>
            </Button>
            <Button
            
            size="sm"
            variant="secondary"
            className="absolute right-3 bg-transparent p-0">
                                {Icon}
            </Button>
            <Input
            value={value}
            onChange={e=>{setValue(e.target.value)}}
            placeholder="Search"
            className=" my-3 focus-visible:ring-0 focus-visible:ring-transparent rounded-full focus-visible:ring-offset-0 pl-12 bg-[#F4F5FB] text-black"
            />
            {value && (
                <X 
                className="absolute right-2 h-5 w-5 text-black cursor-pointer hover:opacity-75 transition"
                onClick={()=>{setValue("")}}
                />
            )}
        </form>
    );
};

