import React, { useEffect } from "react";
import { getNetflixOriginals, getTrendingMovies, getTopRatedMovies } from "../store/actions";
import MoviesRow from "./MoviesRow";
import { useSelector, useDispatch } from "react-redux";


function Content(props) {
    const dispatch = useDispatch();
    const { NetflixOriginals, TrendingMovies, TopRatedMovies } = useSelector((state) => state.infoMovies);
    useEffect(() => {
        dispatch(getNetflixOriginals());
        dispatch(getTrendingMovies());
        dispatch(getTopRatedMovies());
      }, [dispatch]);

    return (
        <div>
            <MoviesRow movies={NetflixOriginals} title="Netflix Originals"/>
            <MoviesRow movies={TrendingMovies} title="Trending Movies"/>
            <MoviesRow movies={TopRatedMovies} title="TopRated Movies"/>
        </div>
    )
}
export default Content;