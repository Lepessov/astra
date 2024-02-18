"use client"

import qs from "query-string";
import { useState } from "react";
import {SearchIcon, X} from "lucide-react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const Search = () => {
    const router = useRouter();
    const [value,setValue] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!value) return;

        const url = qs.stringifyUrl({
            url: '/',
            query: {term:value},
        },{skipEmptyString:true})

        router.push(url);
    };


    return (
        <form
        onSubmit={onSubmit}
        className="relative w-full lg:w-[400px] flex items-center"
        >
            <Button
            type="submit"
            size="sm"
            variant="secondary"
            className="absolute left-0 bg-transparent">
                <SearchIcon className="h-5 w-5 text-muted-foreground"/>
            </Button>
            <Input
            value={value}
            onChange={e=>{setValue(e.target.value)}}
            placeholder="Search"
            className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 pl-12 text-black"
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

