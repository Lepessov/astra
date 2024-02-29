"use client"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { MenuSquare } from "lucide-react"
import { useUser } from '@/store/userContext';
import Avatar from '@/components/avatar';



export const Header = () => {
    const {user,setUser} = useUser();
    const isloggedIn = !!user
    return (
        <header className="fixed top-0 w-full h-14 px-4 border-b z-10 shadow-sm flex items-center justify-between bg-[#212153] text-white">
            <div className="md:max-w-screen-xl">
                SkillSwap
            </div>
            <nav className='w-1/3 hidden lg:block'>
                <ul className='flex items-center justify-between w-full'>
                    <li>
                    <Link href={isloggedIn?"/skillswap":"/login"}>
                        SkillShare
                    </Link>
                    </li>
                    <li>
                    <Link href={isloggedIn?"/croudfunding":"/login"}>
                        CroudFunding
                    </Link>
                    </li>
                    <li>
                    <Link href={isloggedIn?"/QA":"/login"}>
                        Q/A
                    </Link>
                    </li>
                </ul>
            </nav>
            {/* <Search/> */}
            {isloggedIn?(
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
            ):(<Avatar info={{photo:
           "https://avatars.mds.yandex.net/i?id=f5605ac38617bd7db78652359993bca7d2a30dcc-10868638-images-thumbs&n=13",
            name:"user.name"}}/>)}
            <MenuSquare className='h-8 w-8 md:hidden text-white'/>
        </header>
    );
};

