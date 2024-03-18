import React, { useEffect } from 'react'
import { MovieCards } from "../components"
import { useFetch, useTitle } from "../Hooks"
import { useSearchParams } from 'react-router-dom'

export function Search({apiPath}) {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const movieQuery = searchParams.get("findMovie");
  const {data: movies} = useFetch(apiPath, movieQuery);

  useTitle(`Search result for ${movieQuery}`);

  return (
    <main className="dark:bg-gray-900">
      <section className='mx-3 p-3 other:text-center'>
        {movies.length>0 ? (<p className='text-3xl text-gray-700 dark:text-white'>Results for {movieQuery}</p>) : (<p className='text-3xl text-gray-700 dark:text-white'>Not found any movies of {movieQuery}</p>)}
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie, index)=>(
            <MovieCards key={index} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
