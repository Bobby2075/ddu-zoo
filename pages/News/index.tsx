import { news,PrismaClient } from '@prisma/client'
import React from 'react'
import NewsCard from '../../components/NewsCard'

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const news: news[] = await prisma.news.findMany()

    return {
        props: { Initialnews: news}
    }
}

function index({Initialnews}) {

    const news: news[] = Initialnews;

  return (
    <div>
        <div className='space-y-5'>
            <h1 className='text-center text-2xl'>I dag</h1>
            <div className='grid grid-cols-3 justify-items-center'>
                {news.map((news) =>(
                    <div key={news.id}>
                        <NewsCard news={news}/>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h1>Sidste Uge</h1>
        </div>
    </div>
  )
}

export default index