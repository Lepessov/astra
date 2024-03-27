"use client"
// import * as React from "react";


// const Avatar = ({ info }: { info : {photo:string,name:string}}) => {
  
//   return (
//     <div className="flex items-center">
//         <Image
//           src={info.photo}
//           alt={`Photo by ${info.name}`}
//           className="rounded-full w-11 h-11 object-cover mr-2"
//           width={45}
//           height={45}
//         />
//         <span>{info.name}</span>
//     </div>
//   );
// };

// export default Avatar;

import {
    LogOut,
    Settings,
    User
  } from "lucide-react"
  
  import Image from "next/image";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useUser } from "@/store/userContext";
  
  const  Avatar = ({ info }: { info : {photo:string,name:string}}) => {
    const {setUser} = useUser();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <div className="flex items-center cursor-pointer">
          {info.photo?(
            <Image
            src={info.photo}
            alt={`Photo by ${info.name}`}
            className="rounded-full w-11 h-11 object-cover mr-2"
            width={45}
            height={45}
          />
          ):(
            <div className=" p-5 h-14 w-14 mx-auto mb-5 rounded-full flex items-center justify-center bg-cyan-400">
              {info.name.charAt(1).toUpperCase()}
              </div>
          )}
        
    </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={()=>{setUser(null)}}>
            <LogOut  className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  export default Avatar;
