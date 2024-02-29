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
            {!isloggedIn?(
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
            user.photo && "https://yandex.kz/images/search?p=4&text=avatar+img&pos=14&rpt=simage&img_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F274305316_1388717598255977_3464971496675150120_n.jpg%3Fstp%3Ddst-jpg_e15%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D105%26_nc_ohc%3DxRqXlexNsjgAX_Pg9Kq%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D00_AT-k1_BZkMB24JVWPBGa-Is_8Yqjf9YzjaxwIVAh6-ckMg%26oe%3D621C7ADD%26_nc_sid%3D83d603&from=tabbar&lr=29577",
            name:user.name}}/>)}
            <MenuSquare className='h-8 w-8 md:hidden text-white'/>
        </header>
    );
};

