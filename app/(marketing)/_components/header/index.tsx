import Link from 'next/link';
import { Search } from './search';
import { Button } from "@/components/ui/button"
import { MenuSquare } from "lucide-react"



export const Header = () => {
    const isloggedIn = false
    return (
        <header className="fixed top-0 w-full h-14 px-4 border-b z-10 shadow-sm flex items-center justify-between bg-[#212153] text-white">
            <div className="md:max-w-screen-xl">
                SkillSwap
            </div>
            {isloggedIn?<nav className='w-1/5 hidden lg:block'>
                <ul className='flex items-center justify-between w-full'>
                    <li>
                    <Link href="/">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link href="/about">
                        About
                    </Link>
                    </li>
                    <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                    </li>
                </ul>
            </nav>:null}
            <Search/>
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
            ):(<></>)}
            <MenuSquare className='h-8 w-8 md:hidden text-white'/>
        </header>
    );
};

