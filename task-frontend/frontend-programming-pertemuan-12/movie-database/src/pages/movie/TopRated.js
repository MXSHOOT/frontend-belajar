import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function TopRatedMovie() {
    // menyimpan Api Key dan url
    const API_KEY = process.env.REACT_APP_API__KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=8d694a1cd1c58e80c6f4cf8c179e8b6b`;

    const [movies, setMovies] = useState ([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    async function getTopRatedMovies() {
        const response = await axios (URL);
        
        setMovies(response.data.results);
    }
    console.log(movies);

    return (
        <>
            <Hero />
            <Movies movies={movies} />
        </>
    )
}

export default TopRatedMovie;