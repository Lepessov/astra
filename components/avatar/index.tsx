"use client"
import * as React from "react";
import Image from "next/image";

const Avatar = ({ info }: { info : {photo:string,name:string}}) => {
  
  return (
    <div className="flex items-center">
        <Image
          src={info.photo}
          alt={`Photo by ${info.name}`}
          className="rounded-full w-11 h-11 object-cover mr-2"
          width={45}
          height={45}
        />
        <span>{info.name}</span>
    </div>
  );
};

export default Avatar;
