import { news, PrismaClient } from "@prisma/client";
import React from "react";

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const news: news[] = await prisma.news.findMany();

  return {
    paths: news.map((news) => ({
      params: {
        id: news.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const news = await prisma.news.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return {
    props: {
      news,
    },
  };
}

function Article({ news }) {
  return (
    <div>
      <h1>{news.id}</h1>
      <h1>{news.author}</h1>
    </div>
  );
}

export default Article;
