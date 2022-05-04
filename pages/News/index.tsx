import { news, PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";
import NewsCard from "../../components/NewsCard";

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

      <div></div>
    </div>
  );
}

export default index;
