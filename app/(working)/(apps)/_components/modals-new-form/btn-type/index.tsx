"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

const BtnTypes = ({selectedBtn}:{selectedBtn?:string}) => {
    const [selected, setSelected] = useState<string>(selectedBtn || "SS")
    return (
        <div className="w-[90%] flex items-center mx-auto justify-between">
            <Button variant={"hoverless"} onClick={() => {setSelected("SS")}} className={`px-2 hover:bg-none rounded-full w-1/4 ${selected=="SS"?" bg-[#B9CDFF] text-white":" text-gray-600 bg-white"}`}>Skill Swap</Button>
            <Button variant={"hoverless"} onClick={() => {setSelected("CF")}} className={`px-2 hover:bg-none rounded-full w-1/4 ${selected=="CF"?" bg-[#B9CDFF] text-white":" text-gray-600 bg-white"}`}>Croud funding</Button>
            <Button variant={"hoverless"} onClick={() => {setSelected("QA")}} className={`px-2 hover:bg-none rounded-full w-1/4 ${selected=="QA"?" bg-[#B9CDFF] text-white":" text-gray-600 bg-white"}`}>QA</Button>
        </div>
    )
}

export default BtnTypes;