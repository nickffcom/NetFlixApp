import axios from 'axios';
import {FC_GET_NETFLIX_ORIGINALS,GET_ACTION_MOVIES,GET_COMEDY_MOVIES,GET_DOCUMENTARIES,GET_HORROR_MOVIES,GET_ROMANCE_MOVIES,GET_SEARCH_MOVIE,GET_TOPRATED_MOVIES,GET_TRENDING_MOVIES, SET_MOVIE_DETAIL} from './Action.js';

export const API_KEY='218117a635ef8c00e6f1f841cf00ff26';
export const baseUrl="https://api.themoviedb.org/3";


export const getNetflixOriginal=()=>async dispatch=>{
    try{
        const result = await axios.get(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`)
        // console.log("api trả về getNetflixOriginal",result);
        dispatch(FC_GET_NETFLIX_ORIGINALS(result.data.results));
    }catch(error){
        console.log(
            "Get Api Failed getNetflixOriginal"+error
        )
    }
}
export const getTrendingMovies=()=>async dispatch=>{
    try{
        const result = await axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`)
        // console.log("api trả về getTrendingMovies",result);
        dispatch({type:GET_TRENDING_MOVIES,payload:result.data.results});
    }catch(error){
        console.log(
            "Get Api Failed getTrendingMovies"+error
        )
    }
}
export const getTopRatedMovies=()=>async dispatch=>{
    try{
        const result = await axios.get(`${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
        // console.log("api trả về getTopRatedMovies",result);
        dispatch({type:GET_TOPRATED_MOVIES,payload:result.data.results});
    }catch(error){
        console.log(
            "Get Api Failed getTopRatedMovies "+error
        )
    }
}
export const getActionMovies=()=>async dispatch=>{
    try{
        const result = await axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`)
        // console.log("api trả về getActionMovies",result);
        dispatch({type:GET_ACTION_MOVIES,payload:result.data.results});
    }catch(error){
        console.log(
            "Get Api Failed getActionMovies"+error
        )
    }
}
export const getComedyMovies=()=>async dispatch=>{
    try{
        const result = await axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`)
        // console.log("api trả về getComedyMovies",result);
        dispatch({type:GET_COMEDY_MOVIES,payload:result.data.results});
    }catch(error){
        console.log(
            "Get Api Failed getComedyMovies"+error
        )
    }
}
export const getHorrorMovies=()=>async dispatch=>{
    try{
        const result = await axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`)
        // console.log("API getHorrorMovies",result);
        dispatch({type:GET_HORROR_MOVIES,payload:result.data.results});
    }catch(error){
        console.log(
            "Get Api Failed getHorrorMovies "+error
        )
    }
}
export const getRomanceMovies=()=>async dispatch=>{
    try{
        const result = await axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`)
        // console.log("api trả về getRomanceMovies",result);
        dispatch({type:GET_ROMANCE_MOVIES,payload:result.data.results});
    }catch(error){
        console.log(
            "Get Api Failed getRomanceMovies "+error
        )
    }
}
export const getDocumentaries=()=>async dispatch=>{
    try{
        const result = await axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`)
        // console.log("api trả về getDocumentaries",result);
        dispatch({type:GET_DOCUMENTARIES,payload:result.data.results});
    }catch(error){
        console.log(
            "Get Api Failed getDocumentaries"+error
        )
    }
}

export const setMovieDetail = (movie)=>dispatch=>{
    console.log("setMovieDetail",movie);
    dispatch({type:SET_MOVIE_DETAIL,payload:movie})
}

export const getSearchMovie=(keywork)=> async (dispatch)=>{
    try{
        const result=await axios.get(`${baseUrl}/search/multi?api_key=${API_KEY}&language=en-us&page=1&include_adult=false&query=${keywork}`);
        dispatch({type:GET_SEARCH_MOVIE,payload:result.data.results})
        console.log("getSearchMovie",result);
    }catch(error){
        console.log("Error getSearchMovie",error);
    }
}