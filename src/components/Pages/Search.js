import React from "react";
import SearchMovies from "../SearchMovies/SearchMovies";
import MoviesDetail from '../MoviesDetail/MoviesDetail';
import { useSelector } from 'react-redux'

function Search(props) {
    const { MovieDetail } = useSelector((state) => state.infoMovies);

    return (
        <div>
            <SearchMovies />
            <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false}/>
        </div>
    )
}

export default Search;