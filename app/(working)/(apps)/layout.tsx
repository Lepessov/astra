"use client"
import { Button } from "@/components/ui/button";
import AppHeader from "../_components/app-header";
import { useState } from "react";
import { Search } from "@/components/search";
import {StretchVertical, LayoutList, SlidersHorizontal, MessageCircle, } from "lucide-react"
import AppDrawer from "./_components/app-drawer";
import { CreateNew } from "./_components/modals-new-form/new-form";

const AppsLayout = (
    {
        children
    }: {
        children : React.ReactNode
    })    => {
        const [filter,setFilter] = useState<boolean>(true);
    return (
        <div className=" bg-white max-h-screen">
            
            <div className={`static h-screen  w-full  lg:w-[450px] flex flex-col float-left overflow-hidden mx-auto lg:m-0 bg-white z-10 px-3 transition-all ${filter?"lg:ml-[-450px] ml-[-100vw]":"ml-[100vw]"}`}>
                <h2 className="mb-2 text-2xl mx-auto lg:m-0 lg:ml-3 lg:mt-5 font-bold">Category</h2>
                <div className="mx-auto">
                <Search/>
                </div>
                <AppDrawer/>
            </div>
            <AppHeader/>
            <div className=" sm:hidden flex items-center">
                <div className="w-full mx-3">
                    <Search Icon={<SlidersHorizontal className="h-5 w-5 text-muted-foreground"/>}/>
                </div>
                <MessageCircle className="mr-3 w-8"/>
            </div>
            <div className='hidden p-5 sm:flex justify-between bg-[#EBECF1]'>
                <div className='flex justify-between w-52'>
                    <Button className='rounded-full bg-[#212153] min-w-20 hover:bg-blue'>
                        <StretchVertical className="w-5 pr-1"/> Table
                    </Button>
                    <Button className='rounded-full bg-transparent text-black min-w-20 hover:bg-blue'>
                        <LayoutList className="w-5 pr-1"/> List View
                    </Button>
                </div>
                <div className='flex justify-between w-52'>
                    <CreateNew/>
                    {/* <Button className='rounded-full bg-gray-600 min-w-20 hover:bg-blue'>+ New</Button> */}
                    <Button className={`rounded-full ${filter?"bg-white text-black":"bg-[#212153] text-white"} min-w-20 hover:bg-blue`} 
                    onClick={()=>{setFilter(!filter)}} >
                        <SlidersHorizontal className="w-5 pr-1"/> Filter
                    </Button>
                </div>
            </div>
            <div className="flex flex-col bg-[#EBECF1]">
            <hr className="w-[95%] mx-auto  border-gray-300"/>

            </div>
            <div className="h-[calc(100vh-225px)]">
                {children}
            </div>
        </div>
    )
};

export default AppsLayout;