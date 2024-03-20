"use client"
import { usePathname } from "next/navigation";
import AppHeader, { routerData } from "../_components/app-header";

const AuthLayout = (
    {
        children
    }: {
        children : React.ReactNode
    })    => {
        const pathName= usePathname().split("/")[1];

    return (
        <div className="">
            <div className='text-center mx-3 sm:text-left'>
        <h1 className=' text-2xl font-bold'>
            {routerData[pathName].title}
        </h1>
        <p className='hidden sm:block text-sm font-normal'>
            {routerData[pathName].description}
        </p>

        </div>
            <main>
                {children}
            </main>
        </div>
    )
};

export default AuthLayout;