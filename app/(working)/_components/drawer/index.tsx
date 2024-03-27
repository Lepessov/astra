"use client"
import {Repeat, Home, MessageCircle, Settings} from "lucide-react"
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "./../../../../assets/photo/SS LOGO.svg"
import Link from "next/link";
import Avatar from "@/components/avatar";
import { useUser } from "@/store/userContext";
const Drawer = () => {
  const {user} = useUser();
  const pathName= usePathname().split("/")[1];
  
    return (
      <div className="flex z-50 bg-[#F9FAFC] flex-col fixed bottom-0 sm:relative sm:float-left justify-between sm:h-screen ">
        <div className="fixed flex flex-row justify-around bottom-0 w-full pb-1 sm:block sm:relative sm:float-left sm:flex-col  sm:justify-normal sm:w-auto  sm:px-3">
          <div className="hidden sm:block">
            <Image src={logo} width={40} className="mx-auto mt-2" alt="logo"/>
          </div>
          <Link href="/">
          <div className="cursor-pointer flex flex-col items-center">
        <Home className={`mt-7`} stroke={pathName==""?"#212153":"#8A8A8A"}/>
        <p className="hidden sm:block text-sm">Main</p>
        </div>
          </Link>
          <Link href="/skill_swap">
          <div className="cursor-pointer flex flex-col items-center">
        <Repeat className=" mt-7" stroke={pathName=="skill_swap"?"#212153":"#8A8A8A"}/>
        <p className="hidden sm:block text-sm">Skills</p>   
        </div>
          </Link><div className="cursor-pointer flex flex-col items-center">
        <svg className="lucide lucide-circle-plus  mt-7" xmlns="http://www.w3.org/2000/svg" stroke="#8A8A8A" width="24" height="24" viewBox="0 0 24 24" fill="none"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
        <p className="hidden sm:block text-sm">New</p>
        </div>
        <Link href="/qa">
        <div className="cursor-pointer flex flex-col items-center">
        <svg className="lucide lucide-message-square-text  mt-7" xmlns="http://www.w3.org/2000/svg" stroke={pathName=="qa"?"#212153":"#8A8A8A"} width="24" height="24" viewBox="0 0 24 24" fill="none"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" /><path d="M7 14H10" /><path d="M7 10L17 10" /></svg>
        <p className="hidden sm:block text-sm">Q/A</p>
        </div>
        </Link>
        <Link href="/chat">
        <div className="cursor-pointer flex-col items-center hidden sm:flex">
        <MessageCircle className=" mt-7" stroke={pathName=="chat"?"#212153":"#8A8A8A"} />
        <p className="hidden sm:block text-sm">Chat</p>
        </div>
        </Link>
        
        <div className="cursor-pointer flex flex-col items-center sm:hidden">
        <svg className=" mt-7" xmlns="http://www.w3.org/2000/svg" fill="#8A8A8A" stroke={pathName==""?"#212153":"#8A8A8A"} width="24" height="24" viewBox="0 0 24 24"><path d="M11.9209 15.9961C7.65988 15.9961 5.49988 16.7281 5.49988 18.1731C5.49988 19.6311 7.65988 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.96188 21.8701 3.99988 21.8701 3.99988 18.1731C3.99988 14.8771 8.52088 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z" /><path d="M11.9209 3.428C9.77989 3.428 8.03789 5.169 8.03789 7.31C8.03089 9.444 9.75989 11.184 11.8919 11.192L11.9209 11.906V11.192C14.0609 11.192 15.8019 9.45 15.8019 7.31C15.8019 5.169 14.0609 3.428 11.9209 3.428ZM11.9209 12.619H11.8889C8.9669 12.61 6.59989 10.227 6.60989 7.307C6.60989 4.382 8.99189 2 11.9209 2C14.8489 2 17.2299 4.382 17.2299 7.31C17.2299 10.238 14.8489 12.619 11.9209 12.619Z" /></svg>
        </div>
        <Link href="/settings">
          <div className="cursor-pointer flex-col items-center hidden sm:flex">
        <Settings className=" mt-7" stroke={pathName=="settings"?"#212153":"#8A8A8A"}/>
        <p className="hidden sm:block text-sm">Settings</p>
        </div>
        </Link>
        
        </div>
        {/* <div className="hidden sm:flex mb-5 cursor-pointer justify-center rounded-full items-center bg-red-600 mx-auto w-11 h-11">
          A
        </div> */}
        {user && (
                  <Avatar info={{photo:user.photo,name:user.name}}/>
        )}
    </div>
    );
  };
  
  export default Drawer;
  