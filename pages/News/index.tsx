import { news, PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsCard from "../../components/NewsCard";
import Thumbnail from "../../public/img/thumbnail.jpg";
import video from "../../public/img/videothumb.png";

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const news: news[] = await prisma.news.findMany();
  return {
    props: { Initialnews: news },
  };
}

function index({ Initialnews }) {
  const news: news[] = Initialnews;

  return (
    <div>
      <div className="space-y-5">
        <h1 className="text-center text-2xl">I dag</h1>
        <div className=" flex flex-col md:grid grid-cols-3 mx-28 justify-center items-center md:justify-items-center">
          {news.map((news) => (
            <Link href={"/News/" + news.id} key={news.id}>
              <a>
                <NewsCard news={news} />
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-5 mt-5 mx-28">
        <h1 className="text-center text-2xl">Sidste Uge</h1>
        <div className="flex flex-col items-center  justify-center md:grid grid-cols-3 md:justify-items-center">
          <Link href={"/News/animation"}>
            <a>
              <div id="news container" className="w-64 h-96 bg-yellow-400">
                <div className="relative w-auto h-64">
                  <Image src={Thumbnail} layout="fill" />
                </div>
                <h1 className="text-center text-2xl pt-5 text-white">
                  Truede dyrearter
                </h1>
              </div>
            </a>
          </Link>
          <Link href={"/News/video"}>
            <a>
              <div id="news container" className="w-64 h-96 bg-yellow-400">
                <div className="relative w-auto h-64">
                  <Image src={video} layout="fill" />
                </div>
                <h1 className="text-center text-2xl pt-5 text-white">
                  Interview om bevaresle af dyr
                </h1>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default index;
