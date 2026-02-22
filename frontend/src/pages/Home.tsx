import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies
} from "../services/api";

const Home = () => {

  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {

    setPopular(await fetchPopularMovies());
    setTopRated(await fetchTopRatedMovies());
    setTrending(await fetchTrendingMovies());

  };

  return (

    <div>

      <Navbar />

      <MovieRow title="Trending" movies={trending} />

      <MovieRow title="Popular" movies={popular} />

      <MovieRow title="Top Rated" movies={topRated} />

      <Footer />

    </div>

  );
};

export default Home;
