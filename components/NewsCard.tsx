import { news } from "@prisma/client";
import Image from "next/image";
import React from 'react'
import Author from '../public/img/abe.png'

interface NewsCardProps {
  news: news;
}

function NewsCard(props: NewsCardProps) {
  return (
    <div>
      <div className="relative w-64 h-64">
        <Image src={Author} layout="fill"/>
      </div>
        <h1>{props.news.author}</h1>
        <h1>{props.news.date}</h1>
    </div>
  )
}

export default NewsCard