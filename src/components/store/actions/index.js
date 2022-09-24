import axios from "axios";
import * as Types from "../type";

const API_KEY = '1a7a197c2e4428a35f8ce973be229319';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    // console.log(result)
    dispatch({ type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results });
  } catch (error) {
    console.log("Get Netflix Originals error: ", error);
  }
};
  
export const getTrendingMovies = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
      )
      dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results })
    } catch (error) {
      console.log("Get Trending movies error: ", error);
    }
  }
};
  
export const getTopRatedMovies = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
      )
      dispatch({ type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results })
    } catch (error) {
      console.log("Get Top rate movies error: ", error);
    }
  }
};
  
export const setMovieDetails = (movie) => dispatch => {      
  dispatch({type: Types.SET_MOVIE_DETAILS, payload: movie}); 
}

export const getSeachMovies = (keywords) => async dispatch => {
  try {    
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}` 
    )
    dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
  } catch (error) {
    console.log("Get search movies error: ", error);
  }
}