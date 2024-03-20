"use client"
import { usePathname } from "next/navigation";
import SkillSwapDrawer from "../skill-swap-drawer";
import CroudFundingDrawer from "../croud-funding-drower";
import QADrawer from "../qa-drawer";
import { ReactNode } from "react";


interface drawerChooseI{
    [key:string]:ReactNode,
}
const drawerChoose :drawerChooseI = {
    "skill_swap":<SkillSwapDrawer/>,
    "croud_funding":<CroudFundingDrawer/>,
    "qa":<QADrawer/>
}
const AppDrawer = () => {
    const pathName= usePathname().split("/")[1];

    return (
        <div>
            {drawerChoose[pathName]}
        </div>
    )
}

export default AppDrawer;