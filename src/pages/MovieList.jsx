import { useEffect } from "react"
import { MovieCards } from "../components"
import { useFetch, useTitle } from "../Hooks"

export  function MovieList({apiPath, title}) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  // async function getMoviesFromApi() {
  //   const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=49a2a054792b8afddd3200a42fc22880');
  //   const data = await response.json();
  //   console.log(data);
  //   setMovies(data.results);
  // }
  // getMoviesFromApi();
  // }, [movies])

  const {data: movies} = useFetch(apiPath)

  useTitle(title);

  return (
    <main className="">
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
