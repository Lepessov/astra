"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

const BtnTypes = ({setBtnType,btnType}:{setBtnType:(type:string)=>void,btnType:string}) => {
    return (
        <div className="w-[90%] flex items-center mx-auto justify-between">
            <Button variant={"hoverless"} onClick={() => {setBtnType("SS")}} className={`px-2 hover:bg-none rounded-full w-1/4 ${btnType=="SS"?" bg-[#B9CDFF] text-white":" text-gray-600 bg-white"}`}>Skill Swap</Button>
            <Button variant={"hoverless"} onClick={() => {setBtnType("CF")}} className={`px-2 hover:bg-none rounded-full w-1/4 ${btnType=="CF"?" bg-[#B9CDFF] text-white":" text-gray-600 bg-white"}`}>Croud funding</Button>
            <Button variant={"hoverless"} onClick={() => {setBtnType("QA")}} className={`px-2 hover:bg-none rounded-full w-1/4 ${btnType=="QA"?" bg-[#B9CDFF] text-white":" text-gray-600 bg-white"}`}>QA</Button>
        </div>
    )
}

export default BtnTypes;