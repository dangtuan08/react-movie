import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";
import { useDispatch, useSelector } from "react-redux";
import { getListMovie } from "../slices/movieSlice";

const Home = () => {
  const status = useSelector((state) => state.movie.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    const params = { page: 1 };
    window.scrollTo(0, 0);
    // const getMovies = async () => {
    //   try {
    //     const response = await tmdbApi.getMoviesList(movieType.popular, {
    //       params,
    //     });
    //     setMovieItems(response.results.slice(1, 4));
    //     // console.log(response);
    //   } catch {
    //     console.log("error");
    //   }
    // };
    // getMovies();
    dispatch(
      getListMovie({
        type: movieType.popular,
        params: params,
      })
    );
  }, []);
  return (
    <>
      {status ? (
        <h1 className="loading">Loading</h1>
      ) : (
        <>
          <HeroSlide />
          <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Trending Movies</h2>
                <Link to="/movie/popular">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList category={category.movie} type={movieType.popular} />
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Top Rated Movies</h2>
                <Link to="/movie">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList category={category.movie} type={movieType.top_rated} />
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Trending TV</h2>
                <Link to="/tv">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList category={category.tv} type={tvType.popular} />
            </div>

            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Top Rated TV</h2>
                <Link to="/tv">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList category={category.tv} type={tvType.top_rated} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
