import { news, PrismaClient } from "@prisma/client";
import React from "react";

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const news: news[] = await prisma.news.findMany();

  return {
    paths: news.map((news) => ({
      params: {
        id: news.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const news = await prisma.news.findUnique({
    where: {
      id: String(params.id),
    },
  });

  return {
    props: {
      news,
    },
  };
}

function Articles({ news: news }) {
  return (
    <>
      <div className="flex flex-col items-center mx-20 mb-5">
        <p>{news.date}</p>
        <h1 className="text-2xl">{news.title}</h1>
        <div className="mt-3">
          <img src={news.image} alt="" />
        </div>
        <h1 className="text-3xl mt-10">{news.h1}</h1>
        <p className="text-center mt-2">{news.text1}</p>
        <h2 className="text-3xl mt-10">{news.h2}</h2>
        <p className="text-center mt-2">{news.text2}</p>
      </div>
    </>
  );
}

export default Articles;
