"use client"
import * as React from "react";
import Image from "next/image";
import { useState } from "react"; // Import useState
import { Bookmark, MapPin, AlertTriangle } from "lucide-react";
import { toast } from 'sonner'
import { CFCard } from "@/app/(marketing)/page";

const CFCardItem = ({ info, cardColor }: { info:CFCard, cardColor:string }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filled, setFilled] = useState("none");

  const handleBookmarkClick = () => {
    setFilled("white");
    if (!isLoggedIn) {

      toast('Unauthorized', {
        classNames: {
        description: 'pl-4',
        title: 'pl-4'
      },
        description: ' Please log in or register first to save it',
        duration: 5000,
        icon: <AlertTriangle className="w-8 h-8 mr-6" fill="#FFB800" stroke="white"/>,
      });
      setTimeout(() => {
        setFilled("none");
      }, 500); // Reset fill after 1 second
    }
  };

  return (
    <div className={` w-[90vw] sm:w-96 mx-5 shadow-sm border hover:shadow-lg hover:px-3 transition duration-200 text-black rounded-lg overflow-y-auto sm:mx-7  md:ml-7 p-2  ${cardColor}`}>
      <div className="relative">
        <Image
          src={info.photo && "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13"}
          alt={`Photo by ${info.title}`}
          className="w-full object-cover rounded-lg"
          width={200}
          height={188}
        />
        <div
          className={"absolute top-2 right-2 p-2 sm:p-3 cursor-pointer rounded-xl transition duration-300 bg-black bg-opacity-30"}
          onClick={handleBookmarkClick}
        >
          <Bookmark className={`text-white w-5 sm:w-7 transition-all duration-500 ${filled=="white"&&"scale-125"}`} fill={filled} />
        </div>
      </div>
      <h3 className="p-2 text-start">{info.title}</h3>
      <p className="flex items-center">
        <MapPin className="w-5 sm:w-6 mb-1 mr-1" />
        <span className="">{info.content}</span>
      </p>
      

    </div>
  );
};

export default CFCardItem;
