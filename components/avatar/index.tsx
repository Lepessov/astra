"use client"
import * as React from "react";
import Image from "next/image";

const Avatar = ({ info }: { info : {photo:string,name:string}}) => {
  
  return (
    <div className="flex items-center">
        <Image
          src={info.photo}
          alt={`Photo by ${info.name}`}
          className="w-fit object-cover rounded-full pr-2"
          width={35}
          height={35}
        />
        <span>{info.name}</span>
    </div>
  );
};

export default Avatar;
