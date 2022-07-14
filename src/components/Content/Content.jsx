import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import MovieRow from './MovieRow'
import {movies} from '../../Const/Const.js';
import {getActionMovies, getComedyMovies, getDocumentaries, getHorrorMovies, getNetflixOriginal, getRomanceMovies, getTopRatedMovies, getTrendingMovies} from '../store/Action/index.js'
import { FaArrowAltCircleUp } from 'react-icons/fa';
import styled from 'styled-components';
import {animateScroll as scroll} from'react-scroll';
import {useScrollY} from '../customHook/useScrollY.jsx';
export default function Content() {
  const dispatch= useDispatch();
  const goScrolltoTop=()=>{
    scroll.scrollToTop();
  }
  const [scrollY]=useScrollY();
  const {
    NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector(state=>state.infoMovies);

  useEffect(() => {
    dispatch(getNetflixOriginal());
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getActionMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentaries());



  }, [dispatch]);
  // console.log({NetflixOriginals});


  return (
    <div>
        <MovieRow movies={NetflixOriginals} title="NetFlix Original" isNetFlix={true} idSection='NetFlix'/>
        <MovieRow movies={TrendingMovies} title="Trending Movies" idSection='Trending'/>
        <MovieRow movies={TopRatedMovies} title="Top Rated Movies" idSection='TopRated'/>
        <MovieRow movies={ActionMovies} title="Action Movies" idSection='Action'/>
        <MovieRow movies={ComedyMovies} title="Comedy Movies" idSection='Comedy'/>
        <MovieRow movies={HorrorMovies} title="Horror Movies" idSection='Horror'/>
        <MovieRow movies={RomanceMovies} title="RomanceMovies" idSection='Romance'/>
        <MovieRow movies={Documentaries} title="Documentaries" idSection='Documentaries'/>
        <GoToTop onClick={()=>{goScrolltoTop()}}
        style={{visibility:`${scrollY>600?'visible':'hidden'}`}}
        >
          <FaArrowAltCircleUp/>
        </GoToTop>
    </div>
  )
}
const GoToTop=styled.div`
position:fixed;
z-index:10;
right:70px;
bottom:50px;
font-size:50px;
color:rgba(255,255,255,0.4);
opacity:0.4
transition:all 0.3s linear;
&:hover{
  color:rgba(255,255,255,0.9);
  opacity:1
}
@media screen and (max-width:600px){
  right:40px;
}
`;
