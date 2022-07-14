import React from 'react'
import styled, { keyframes } from 'styled-components';
import {useDispatch} from 'react-redux';
import { GiConsoleController } from 'react-icons/gi';
import {setMovieDetail} from '../store/Action/index.js';
export default function MovieDetail({movie,showModal}) {
 
 
  // console.log("showmodal",showModal);
  // console.log("showMovie",movie);
  const dispatch= useDispatch();
  const handleCloseModal=()=>{
    // console.log("đã click zô r, giá trị cũ là:",movie);
    dispatch(setMovieDetail(null));
  }
  // console.log("đã click zô r và tiếp theo là ",showModal);
  return (
    <MovieDetailContainer classname={`MovieDetailContainer`} >
      <div className={`backdrop ${showModal?'showBackDrop':'hideBackDrop'}`} onClick={handleCloseModal}></div>
      <div className={`modal ${showModal?'showModal':'hideModal'}`}
       style={
         movie ?
         {backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path||movie.poster_path})`,
         backgroundSize:'cover'
      }:{}}
      >
        <div className="modal-container">
          <div className="movieInfo">
            <h1 className="title">{movie && (movie.name||movie.title)}</h1>
            <p className='rate'>Rating:{movie && (movie.vote_average*10)}%<span className=''>Popular:{movie && (movie.popularity)}</span></p>
            <p className="realseDate">Relase date :{movie && (movie.release_date||movie.first_air_date)}</p>
            <p className="runtime">Run time:{movie && (movie.runtime||movie.episode_runtime)}</p>
            <p className="overview">
            {movie && (movie.overview)}
            </p>
          </div>
        </div>
      </div>
    </MovieDetailContainer>
  )
}

const FadeIn=keyframes`
  0%:{
    background:rgba(0,0,0,0);
  }
  100%:{
    background:rgba(0,0,0,0.6);
  }
`;

const MovieDetailContainer=styled.div`

.showModal{
  opacity:
  top:25%;
  left:0;
  visibility:visible;
  transition:all 0.3s linear;

}
.hideModal{
  top:0;
  opacity:0;
  visibility:hidden;
  transition:all 0.3s linear;
}
.backdrop{
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  width:100%;
  z-index:9999;
  background-color:rgba(0,0,0,0.5);
  animation:${FadeIn} 1s cubic-bezier(0.17,0.85,0.45,1) fowards;

}
.showBackDrop{
  display:block;
}
.hideBackDrop{
  display:none;
}
.modal{
  position:fixed;
  top:25%;
  left:0;
  z-index:10000;
  height:60vh;
  margin:0 auto;
  color:var(--color-white);
  box-shadow:0 15px 40px rgba(var(--color-dark),0.2);
  transition:all 0.3s ease;
  width:100%;
  @media screen and (max-width:1184px){
    height:70%;
  }
  @media screen and (max-width:600px){
    height:70%;
  }
      &-container{
        position:relative;
        height:100%;
        width:70%;
        background:linear-gradient(90deg,rgba(0,0,0,0.94) 60%, transparent);
        @media screen and (max-width:1184px){
          background:linear-gradient(90deg,rgba(0,0,0,0.733) 40%, transparent);
          width:88%;
        }
        @media screen and (max-width:980px){
          background:linear-gradient(90deg,rgba(0,0,0,0.95) 50%, transparent);
          width:100%;
        }
        @media screen and (max-width:600px){
          background:linear-gradient(90deg,rgba(0,0,0,0.88) 60%, transparent);
          width:100%;
        }
      }

      .movieInfo{
        width:65%;
        height:100%;
        padding-left:24px;
        color:var(--color-white);
        font-size:20px;
        padding-top:30px;
        @media screen and (max-width:600px){
          font-size:16px;
          width:100%;
        }
        .title{
          margin-top:30px;
          font-size:45px;
          font-weight:700;
        }
        .rate{
          margin-top:30px;
          color:var(--color-green);
          span{
            color:yellow;
            margin-left:12px;
          }
        }
        .realseDate,.runtime{
          margin-top:15px;
        }
       
        .overview{
            margin-top:20px;
            color:rgba(255,255,255,0.6);
            line-height:1.4;
            font-size:18px;
            @media screen and (max-width:600px){
              font-size:14px;
              
            }
        }
      }
}
`;
