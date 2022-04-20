import Image from 'next/image'
import React from 'react'
import Error from '../public/img/stinky.jpg'

function Custom404() {
  return (
    <div>
        <div className='relative h-64 w-64 flex justify-center'>
            <Image src={Error} layout="fill"/>
        </div>

        <h1>Uh oh stinky poopy</h1>
    </div>
  )
}

export default Custom404