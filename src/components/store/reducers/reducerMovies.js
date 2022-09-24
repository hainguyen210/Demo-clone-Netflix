import * as Types from '../type';

const reducerMoviesInitialState = {
  NetflixOriginals: null,
  TrendingMovies: null,  
  TopRatedMovies: null,
  MovieDetail: null,
  SearchMovies: null,
}

const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:    
      return {...state, NetflixOriginals: payload}

    case Types.GET_TRENDING_MOVIES:         
      
      return {...state, TrendingMovies: payload}

    case Types.GET_TOP_RATED_MOVIES:    
      return {...state, TopRatedMovies: payload}    

    case Types.SET_MOVIE_DETAILS:    
      return {...state, MovieDetail: payload}         

    case Types.GET_SEARCH_MOVIES:      
      return {...state, SearchMovies: payload}         

    default:
      return state
      
  }
}
export default reducerMovies;