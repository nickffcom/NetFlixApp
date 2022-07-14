import React, { useRef } from 'react'
import styled  from 'styled-components';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import SmoothHoriziontalScrolling from '../../Until/index.js';
import { useViewport } from '../customHook/useViewport.js';
import {useDispatch} from 'react-redux';
import { setMovieDetail } from '../store/Action/index.js';

  
export default function MovieRow({movies,title,isNetFlix,idSection}) {
    const [windowWidth] =useViewport();
    const dispatch = useDispatch();
    const sliderRef = useRef();
    const movieRef = useRef();
    const handleScrollRight=()=>{
        const maxScrollLeft=sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        console.log("max"+maxScrollLeft);
        console.log("sliderRef.current.scrollLeft"+sliderRef.current.scrollLeft);
        if(sliderRef.current.scrollLeft<maxScrollLeft){
            console.log("đã zô đc right");
            SmoothHoriziontalScrolling(sliderRef.current,250,movieRef.current.clientWidth*2,sliderRef.current.scrollLeft);
        }
    }
    const handleScrollLeft=()=>{
      
        console.log(sliderRef.current.scrollLeft);
        if(sliderRef.current.scrollLeft>0){
            console.log("đã zô đc left");
            SmoothHoriziontalScrolling(sliderRef.current,250,-movieRef.current.clientWidth*2,sliderRef.current.scrollLeft);
        }
    }
    const handleMovie=(movie)=>{
        dispatch(setMovieDetail(movie));
    }
  return (
    <MoviesRowContainer draggable='false' id={idSection}>
        <h1 className='heading'>{title}</h1>
        <MoviesSlider ref={sliderRef} draggable='true'
            style={
                movies&&movies.length>0 ?
                {
                    gridTemplateColumns:`repeat(${movies.length},
                        ${windowWidth>1200 ?'360px'
                            :windowWidth >992 ?'300px'
                            :windowWidth >768 ?'250px':'200px'
                         }
                    )`,
                   
                }:{}
            }
        >
            {
                movies&&movies.length>0 && movies.map((item,index)=>{
                    if (item.poster_path&&item.backdrop_path!==null) {
                        let imageURL=isNetFlix?`https://image.tmdb.org/t/p/original/${item.poster_path}`:`https://image.tmdb.org/t/p/original/${item.backdrop_path}`;
                        return (
                                <div key={index} className="movieItem"  ref={movieRef} onClick={()=>handleMovie(item)}>
                                    <img src={imageURL} alt="" />
                                    <div className="movieName">{item.title||item.name}</div>
                                </div>
                        )

                    }
                   
                })
               
            }
          
        </MoviesSlider>
      
        <div className={`btn-left ${isNetFlix &&'isNetFlix'}`} onClick={handleScrollLeft}>
                <FiChevronLeft/>
            </div>
            <div className={`btn-right ${isNetFlix &&'isNetFlix'}`} onClick={handleScrollRight}>
                <FiChevronRight/>
            </div>

    </MoviesRowContainer>
    
  )
}



const MoviesRowContainer=styled.div`
background-color:var(--color-bg);
color:var(--color-white);
padding:20px 20px 0;
position:relative;
width:100%;
height:100%;
.heading{
    font-size:18px;
    user-select:none
}

.btn-left{
    position:absolute;
    top:50%;
    color:var(--color-white);
    padding:20px 0px;
    width:40px;
    height:50px;
    left:30px;
    z-index:20;
    transfrom-origin:center;
    cursor:pointer;
    background-color:rgba(0,0,0,0.5);
    border-radius:4px;
    display:flex;
    align-items:center;
    transform:translateY(-20%);
    font-size:50px;
    &:hover{
        background-color:rgba(0,0,0,0.8);
       
        svg{
            transform:scale(1.2);
            opacity:1;
        }
    }
    .svg{
        opacity:0.7;
        font-size:40px;
        
    }
    &.isNetFlix{
        height:100px;
        width:max-content;
    }


}

.btn-right{
    position:absolute;
    top:50%;
    color:var(--color-white);
    padding:20px 0px;
    width:40px;
    height:50px;
    right:30px;
    z-index:20;
    transfrom-origin:center;
    cursor:pointer;
    background-color:rgba(0,0,0,0.5);
    border-radius:4px;
    display:flex;
    align-items:center;
    transform:translateY(-20%);
    font-size:50px;

    &.isNetFlix{
        height:100px;
        width:max-content;
    }
    &:hover{
        background-color:rgba(0,0,0,0.8);
       
        svg{
            transform:scale(1.2);
            opacity:1;
        }
    }
    .svg{
        opacity:0.7;
        font-size:40px;
        
    }


}

`;
const MoviesSlider=styled.div`
display:grid;
gap: 10px;

transition:all 0.3s linear;
user-select:none;
over-flow-y:hidden;
over-flow-x:auto;
over-flow:hidden;
scroll-behavior:smooth;

padding-top:28px;
padding-bottom:28px;

&:hover .movieItem{
    opacity:0.3;
}

.movieItem{
    transform:scale(1);
    max-width:400px;
    max-height:500px;
    width:100%;
    height:100%;
    transition:all 0.3s linear;
    user-select:none;
    border-radius:6px;
    transform:center left;
    position:relative;

    &:hover{
        transform:scale(1.1);
        z-index:10;
        opacity:1;
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    .movieName{
        position:absolute;
        left:0;
        right:0;
        buttom:0;
        padding:4px;
        text-align:center;
        font-size:14px;
        background-color:rgba(0,0,0,0.65);
        color:white;

    }

}

`;