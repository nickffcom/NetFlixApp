import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import {VscMute,VscUnmute} from 'react-icons/vsc'
import styled from 'styled-components';
export default function Intro() {
  const [isPlay,setisPlay] = useState(true);
  return (
    <IntroContainer>
      <ReactPlayer 
      className="videoIntro" 
      playing={true} 
      width="100%" 
      height="100%"
      volume={1}
      loop={true}
      muted={isPlay}
      url="https://vimeo.com/273686020"
      />
      {/* {console.log("phát"+isPlay)} */}
      <div className="infoIntro">
        <h1 className='headingIntro'>Netflix Elite</h1>
        <p className='overviewIntro'>
        Trailer for Netflix series "The Rain"

        Production: Fox Devil Films GmbH for Netflix Amsterdam
        Director: Simon Ritzler
        Dop: Carlo Jelavic
        Editor: Michael Timmers
        Colorist: Mike Bothe
        Compositing: Stathis Nafpliotis
        </p>
      </div>
      {
        isPlay?(
          <VscMute className='btnVolumn' onClick={()=> setisPlay(prev =>!prev)}/>
        ):
        (
          <VscUnmute className='btnVolumn' onClick={()=>setisPlay(prev =>!prev)}/>
        )
      }
     <div className="fadeBottom"></div>
    </IntroContainer>
  )
}
const IntroContainer=styled.div`
background-color:var(--color-bg);
position:relative;
color:var(--color-white);
padding-top:56%;
.fadeBottom{
  position:absolute;
  bottom:0;
  width:100%;
  height:100px;
  background-image:linear-gradient(180deg,transparent,rgba(15,15,15,0.6) 40%,rgb(17,17,17),rgb(17,17,17));
}
.btnVolumn{
  position:absolute;
  height:40px;
  width:40px;
  right:10%;
  top:50%;
  cursor:pointer;
  border-radius:50%;
  padding:6px;
  color:#bbb;
  border:#fff solid 1px;
  transition:all 0.3s ease;
  transform:scale(1);

  @media screen and (max-width:800px){
    height:30px;
    width:30px;
    
  }
  @media screen and (max-width:800px){
    left:24px;
  }
  &:hover{
    color:#fff;
    transform:scale(1.2);
    background-color:rgba(211,211,211,0.18)
  }


}

.videoIntro{
  position:absolute;
  top:0;
  left:0;

}

.infoIntro{
  position:absolute;
  top:140px;
  left:30px;
  @media screen and (max-width:800px){
    top:120px;
    left:25px;
  }
  @media screen and (max-width:600px){
    top:100px;
    left:15px;
  }
  .headingIntro{
    font-size:60px;
    transition:all 0.3s ease;
     
    @media screen and (max-width:800px){
      font-size:40px;
      
    }
    @media screen and (max-width:800px){
      font-size:24px;
    }
  }
  .overviewIntro{
    max-width:550px;
    width:100%;
    line-height:1.3;
    padding-top:25px;
    font-size:18px;
    @media screen and (max-width:800px){
      font-size:16px;

    }
    @media screen and (max-width:800px){
      font-size:14px;
      
    }
  }
 
}

`;
