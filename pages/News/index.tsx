import { news, PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsCard from "../../components/NewsCard";
import Thumbnail from "../../public/img/thumbnail.jpg";

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
        <div className="grid grid-cols-3 mx-28 justify-items-center">
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
        <div className="grid grid-cols-3 justify-items-center">
          <Link href={"/News/animation"}>
            <a>
              <div id="news container" className="w-64 h-96 bg-yellow-400">
                <div className="relative w-auto h-64">
                  <Image src={Thumbnail} layout="fill" />
                </div>
                <h1 className="text-center text-2xl pt-5 text-white">
                  Animation
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
