"use client"
import * as React from "react";
import Image from "next/image";
import { useState } from "react"; // Import useState
import { AdCard } from "../carousel";
import { Bookmark, MapPin, Check, AlertTriangle } from "lucide-react";
import { toast } from 'sonner'

const CardItem = ({ info }: { info: AdCard }) => {
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
    <div className="shadow-sm border hover:shadow-lg hover:px-3 transition- duration-200 text-black rounded-lg overflow-y-auto mx-7 p-2">
      <div className="relative">
        <Image
          src={info.img}
          alt={`Photo by ${info.title}`}
          className="w-fit object-cover rounded-lg"
          width={300}
          height={188}
        />
        <div
          className={"absolute top-2 right-2 p-3 cursor-pointer rounded-xl transition duration-300 bg-black bg-opacity-30"}
          onClick={handleBookmarkClick}
        >
          <Bookmark className={`text-white transition-all duration-500 ${filled=="white"&&"scale-125"}`} fill={filled} />
        </div>
      </div>
      <h3 className="p-2 text-start">{info.title}</h3>
      <p className="flex items-end pb-2">
        <MapPin className="w-6 mb-1 mr-1" />
        <span>{info.location}</span>
      </p>
      

    </div>
  );
};

export default CardItem;
