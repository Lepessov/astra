"use client"
import { usePathname } from 'next/navigation';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from 'next/link';
import {Star} from "lucide-react"
import { Button } from '@/components/ui/button';
import { useState } from 'react';


interface RouterData {
    [key: string]: RouterDataItem;
}
interface RouterDataItem{
    title: string,
    description:string,
    value:string
}

export const routerData: RouterData = {
    "qa": {
        title: "Questino and Answer",
        description:"Post Question and get answer",
        value:"qa"
    },
    "skill_swap": {
        title: "SkillSwap",
        description:"Find skills to improve you gpa",
        value:"skill_swap"
    },
    "croud_funding": {
        title: "Croud Funding",
        description:"Post Question and get answer",
        value:"croud_funding"
    },
    "login": {
        title: "Sign In",
        description:"Sign up to get acess more functions",
        value:"sign_in"
    },
    "register": {
        title: "Sign Up",
        description:"Sign up to get acess more functions",
        value:"sign_up"
    },
    undefined: {
        title: "Home",
        description:"Home page",
        value:"home"
    },
    "chat": {
        title: "Chat",
        description:"Chat page",
        value:"chat"
    },
    
}
const AppHeader = () => {
    const pathName= usePathname().split("/")[1];
    console.log(pathName)
    return (
      <header className=' pt-8'>
        <div className='flex justify-between'>
        <div className='text-center mx-auto sm:mx-3 sm:text-left'>
          <h1 className=' text-2xl font-bold'>
              {routerData[pathName].title}
          </h1>
          <p className='hidden sm:block text-sm font-normal'>
              {routerData[pathName].description}
          </p>

        </div>
        <div className='hidden sm:flex items-center'>
          <div className='hidden smL rounded-full bg-slate-300 p-2 m-2'>
            <Star strokeWidth={2}/>
          </div>
          <div className=' rounded-full bg-slate-300 p-2 m-2'>
            <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={5} width="24" height="24" viewBox="0 0 20 20" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M8.33337 9.99998C8.33337 9.07951 9.07957 8.33331 10 8.33331C10.9205 8.33331 11.6667 9.07951 11.6667 9.99998C11.6667 10.9205 10.9205 11.6666 10 11.6666C9.07957 11.6666 8.33337 10.9205 8.33337 9.99998Z" fill="#333333"/><path fillRule="evenodd" clipRule="evenodd" d="M8.33337 4.16667C8.33337 3.24619 9.07957 2.5 10 2.5C10.9205 2.5 11.6667 3.24619 11.6667 4.16667C11.6667 5.08714 10.9205 5.83333 10 5.83333C9.07957 5.83333 8.33337 5.08714 8.33337 4.16667Z" fill="#333333"/><path fillRule="evenodd" clipRule="evenodd" d="M8.33337 15.8334C8.33337 14.9129 9.07957 14.1667 10 14.1667C10.9205 14.1667 11.6667 14.9129 11.6667 15.8334C11.6667 16.7538 10.9205 17.5 10 17.5C9.07957 17.5 8.33337 16.7538 8.33337 15.8334Z" fill="#333333"/></svg>
          </div>
        </div>
        </div>
        <ScrollArea
      className=""
      type="scroll"
    >
      <div  className="flex w-max ml-0  px-0 sm:mt-5 text-sm sm:text-lg">
      <Link href="/skill_swap">
      <div className={`w-44 text-sm text-center ${pathName==='skill_swap'?" text-blue-700 font-bold border-b-blue-700 border-b-2":""}`}>
        <p className=' p-2'>Skill Swap</p>
      </div>
      </Link>
      <Link href="/croud_funding">
      <div className={`w-44 text-sm text-center ${pathName==='croud_funding'?" text-blue-700 font-bold border-b-blue-700 border-b-2":""}`}>
        <p className=' p-2'>Croud Funding</p>
      </div>
      </Link>
      <Link href="/qa">
      <div className={`w-44 text-sm text-center ${pathName==='qa'?" text-blue-700 font-bold border-b-blue-700 border-b-2":""}`}>
        <p className=' p-2'>QA</p>
      </div>
      </Link>
      </div>
      <ScrollBar orientation="horizontal" />
        </ScrollArea>
        
      </header>
    );
  };
  
  export default AppHeader;
  