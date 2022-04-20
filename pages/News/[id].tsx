import { PrismaClient, news } from '@prisma/client'
import React from 'react'

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

export async function getStaticProps({params}) {
    const prisma = new PrismaClient();
    const news = await prisma.news.findUnique({
        where: {
            id: Number(params.id)
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
    <div>{news.id}</div>
  )
}

export default Articles