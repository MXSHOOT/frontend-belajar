import { useState } from "react";
import Add from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";

function Home() {
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <Add movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default Home;
