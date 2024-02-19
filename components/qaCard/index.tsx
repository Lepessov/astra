"use client"

import * as React from "react";
import { QACard } from "@/app/(marketing)/page";
import Image from "next/image";

const QACardItem = ({ info, cardColor }: { info:QACard, cardColor:string }) => {

  return (
    <div className={`shadow-sm border hover:shadow-lg hover:px-3 transition- duration-200 text-black rounded-lg overflow-y-auto mx-7 ml-2 md:ml-7 p-2 ${cardColor}`}>
      <div className="flex items-center">
      <Image
          src={info.avatar}
          alt={`Photo by ${info.title}`}
          className="w-fit object-cover rounded-full pr-2"
          width={35}
          height={35}
        />
        <p className="text-base">{info.author}</p>
      </div>
      <h3 className="p-2 pl-0 text-start text-lg">{info.title}</h3>
      <p className="text-base text-gray-700">
        {info.description}
      </p>
      <p className="text-gray-400 text-xs">
        {info.created}
      </p>
    </div>
  );
};

export default QACardItem;
