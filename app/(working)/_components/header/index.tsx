"use client"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { MenuSquare } from "lucide-react"
import { useUser } from '@/store/userContext';
import Avatar from '@/components/avatar';
import { useState } from 'react';



export const Header = () => {
    const {user, setUser} = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)
    const isloggedIn = !!user




    return (
        <header className="fixed top-0 w-full h-14 px-4 border-b z-10 shadow-sm flex items-center justify-between bg-[#212153] text-white">
            <div className={`transition-all duration-700 pl-0 z-20 md:max-w-screen-xl ${!isMenuOpen && " pl-16"}`}>
                SkillSwap
            </div>


            <nav className='w-1/3 hidden md:block'>
                <ul className='flex items-center justify-between w-full'>
                    <li>
                        <Link href="/">
                            Main
                        </Link>
                        </li>
                    <li>
                        <Link href={isloggedIn?"/skill_swap":"/login"}>
                            SkillShare
                        </Link>
                    </li>
                    <li>
                        <Link href={isloggedIn?"/croud_funding":"/login"}>
                            CroudFunding
                        </Link>
                    </li>
                    <li>
                        <Link href={isloggedIn?"/qa":"/login"}>
                            Q/A
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* <Search/> */}
            {!isloggedIn ? (
                <div className='hidden md:block'>
                    <Link href="/login">
                        <Button className='text-indigo-900 bg-white m-4 hover:text-white'>
                            sign in
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button className='bg-transparen'>
                            sign up
                        </Button>
                    </Link>   
                </div>
            )
            :
            (
                <div className='hidden md:block'>
                    <Avatar info={{
                        photo:user.photo || "https://avatars.mds.yandex.net/i?id=f5605ac38617bd7db78652359993bca7d2a30dcc-10868638-images-thumbs&n=13",
                        name:user.name
                        }}
                    />
                </div>
            )}

            <MenuSquare onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='cursor-pointer h-8 w-8 md:hidden text-white'/>

            <div className={`rounded-ee-xl mt-10 md:hidden  bg-[#212153]  transition-all duration-700 fixed top-0 ${isMenuOpen?"left-[-100%]":"left-0"} z-10`}>
                
                <nav className='text-center w-60  pt-0'>
                    <ul className='flex flex-col items-center py-3 justify-between w-full'>
                        <li className='w-full p-2'>
                            <Link className='w-full block' href="/">
                                Main
                            </Link>
                        </li>
                        <li className='w-full p-2'>
                            <Link className='w-full block' href={isloggedIn?"/skill_swap":"/login"}>
                                SkillShare
                            </Link>
                        </li>
                        <li className='w-full p-2'>
                            <Link className="w-full block" href={isloggedIn?"/croud_funding":"/login"}>
                                CroudFunding
                            </Link>
                        </li>
                        <li className='w-full p-2'>
                            <Link className="w-full block" href={isloggedIn?"/qa":"/login"}>
                                Q/A
                            </Link>
                        </li>
                        {isloggedIn?(
                            <>
                                <li className='w-full p-2'>
                                    <Link className="w-full block" href={"/profile"}>
                                        Profile
                                    </Link>
                                </li>
                                <li className='w-full p-2'>
                                    <Link className="w-full block" href={"/saved"}>
                                        Saved posts
                                    </Link>
                                </li>
                                <li className='w-full p-2'>
                                    <div onClick={()=>{setUser(null)}}>
                                        Logout
                                    </div>
                                </li>
                            </>
                            )
                            :
                            (
                            <div className='flex flex-col'>
                                <Link className="w-full block" href="/login">
                                    <Button className='text-indigo-900 bg-white m-4 hover:text-white'>
                                        sign in
                                    </Button>
                                </Link>
                                <Link className="w-full block" href="/register">
                                    <Button className='bg-transparen'>
                                        sign up
                                    </Button>
                                </Link>   
                            </div>
                            )
                        }
                    </ul>
                </nav>
            </div>

        </header>
    );
};


