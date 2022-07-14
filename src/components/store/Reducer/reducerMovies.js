import{GET_ACTION_MOVIES, GET_COMEDY_MOVIES, GET_DOCUMENTARIES, GET_HORROR_MOVIES, GET_NETFLIX_ORIGINALS, GET_ROMANCE_MOVIES, GET_SEARCH_MOVIE, GET_TOPRATED_MOVIES, GET_TRENDING_MOVIES, SET_MOVIE_DETAIL} from '../Action/Action.js';
const reducerMoviesinitialState = {
  NetflixOriginals:null,
  TrendingMovies:null,
  TopRatedMovies:null,
  ActionMovies:null,
  ComedyMovies:null,
  HorrorMovies:null,
  RomanceMovies:null,
  Documentaries:null,
  MovieDeTailNEK:null,
  SearchMovieNEK:null,
}

const reducerMovies=(state = reducerMoviesinitialState,action) => {
  // console.log("action là",action);
  const {payload}=action
  switch (action.type) {
  
  case GET_NETFLIX_ORIGINALS:
    //  console.log("payload trending",action.payload);
     return {...state,NetflixOriginals:payload}
    break;
  case GET_TRENDING_MOVIES:
    return {...state,TrendingMovies:payload}
  case GET_TOPRATED_MOVIES:
    return {...state,TopRatedMovies:payload}
  case GET_ACTION_MOVIES:
    return {...state,ActionMovies:payload}  
  case GET_COMEDY_MOVIES:
    return {...state,ComedyMovies:payload}
  case GET_HORROR_MOVIES:
    return {...state,HorrorMovies:payload}      
  case GET_ROMANCE_MOVIES:
    return {...state,RomanceMovies:payload}   
  case GET_DOCUMENTARIES:
      return {...state,Documentaries:payload}    
  case SET_MOVIE_DETAIL:
    // console.log("reducer movieDetailednek là",state.MovieDeTailNEK);
     return {...state,MovieDeTailNEK:payload}
  case GET_SEARCH_MOVIE:
    return {...state,SearchMovieNEK:payload}                  
  default:
    return state
  }
}
export default reducerMovies;