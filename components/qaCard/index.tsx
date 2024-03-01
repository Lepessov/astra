"use client"

import * as React from "react";
import { QACard } from "@/app/(marketing)/page";
import Image from "next/image";

const QACardItem = ({ info, cardColor }: { info:QACard, cardColor:string }) => {

  return (
    <div className={`shadow-sm border hover:shadow-lg hover:px-3 transition- duration-200 text-black rounded-lg overflow-y-auto mx-7 ml-2 md:ml-7 p-2 ${cardColor}`}>
      <div className="flex items-center">
      <Image
          src={info.avatar || "https://yandex.kz/images/search?p=4&text=avatar+img&pos=14&rpt=simage&img_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F274305316_1388717598255977_3464971496675150120_n.jpg%3Fstp%3Ddst-jpg_e15%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D105%26_nc_ohc%3DxRqXlexNsjgAX_Pg9Kq%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D00_AT-k1_BZkMB24JVWPBGa-Is_8Yqjf9YzjaxwIVAh6-ckMg%26oe%3D621C7ADD%26_nc_sid%3D83d603&from=tabbar&lr=29577"}
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
      <p className="text-gray-400 text-xs text-start">
        {info.created}
      </p>
    </div>
  );
};

export default QACardItem;
