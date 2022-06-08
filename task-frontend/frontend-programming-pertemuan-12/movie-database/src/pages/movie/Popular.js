import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";


function PopularMovie() {
    // Menyimpan API KEY dan URL
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Membuat state movie
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getTrendingMovies();
    }, []);

    async function getTrendingMovies() {
        // Fetch data dari axios
        const response = await axios(URL);

        // Menyimpan data kedalam state movie
        setMovies(response.data.results);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    console.log(movies);
    return (
        <>
            <Hero />
            <Movies movies={movies} />
        </>
    )
}

export default PopularMovie;