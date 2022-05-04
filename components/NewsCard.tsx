import { news } from "@prisma/client";
import Image from "next/image";
import React from "react";
import Author from "../public/img/abe.png";

interface NewsCardProps {
  news: news;
}

function NewsCard(props: NewsCardProps) {
  return (
    <div className="text-center bg-yellow-400 text-white text-2xl space-y-5 mt-5 pb-5">
      <div className="relative w-64 h-64">
        {/* <Image src={Author} layout="fill"/> */}
        <img src={props.news.image} className="object-cover" />
      </div>
      <h1>{props.news.title}</h1>
      <h1>{props.news.author}</h1>
      <h1>{props.news.date}</h1>
    </div>
  );
}

export default NewsCard;
