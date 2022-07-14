import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import Intro from '../Intro/Intro.jsx';
import Content from '../Content/Content.jsx';
import Menu from '../Menu/Menu';
import MovieDetail from '../MovieDetail/MovieDetail.jsx';
export default function Home() {
    const {MovieDeTailNEK}= useSelector(state => state.infoMovies);
    const [isShowMovieDetail,setIsShowMovieDetail]=useState(false);
    useEffect(() => {
        setIsShowMovieDetail(MovieDeTailNEK?true:false);
    }, [MovieDeTailNEK]);
    console.log("appjs ne",MovieDeTailNEK);
  return (
    <div>

      <Intro/>
      <Content/>  
      <Menu/>
      <MovieDetail movie={MovieDeTailNEK} showModal={isShowMovieDetail}/>

    </div>
  )
}
