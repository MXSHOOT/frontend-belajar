/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import HeroStyled from "./Hero.styled";

function Hero(){
    // destruct movie state
    const [movie, setMovie] = useState("");

    useEffect(async() => {
        // melakukan effect: fetch data movie(api)
        const response = await fetch("https://www.omdbapi.com/?apikey=d7497266&i=tt3896198");

        const data = await response.json();
        setMovie(data);
    }, []);
 
    return (
        <HeroStyled>
            <section>
                <div className="hero__left">
                    <h2>{movie.Title}</h2>
                    <h3>Genre: {movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button variant="secondary" size="lg">Watch Movie</Button>
                </div>
                <div className="hero__right">
                    <img src={movie.Poster} alt="" />
                </div>
            </section>
        </HeroStyled>
    );
}

export default Hero;