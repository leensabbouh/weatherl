import React from 'react'
import Image from 'next/image'
import { Movie } from '../typing'
interface Props{
  // when we useing firebase
  // movie:Movie | DocumentData[]
  movie:Movie 
}
function Thumbnail({movie}:Props) {
  return (
    <div className='relative h028 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
       <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail