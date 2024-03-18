 import { useEffect, useState } from "react"

export const useFetch = (apiPath, movieQuery='') => {
    const [data, setData] = useState([]);
    const url = `${process.env.REACT_APP_MOVIELISTURL_BASE_URL}${apiPath}?api_key=${process.env.REACT_APP_MOVIELISTURL_API_KEY}&query=${movieQuery}`;

    console.log(url);

    useEffect(() => {
      async function getMovies() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
        console.log(url);
      }
      getMovies();
    }, [url])

  return {data};
}
