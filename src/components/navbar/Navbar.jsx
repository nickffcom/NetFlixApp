import React, { useEffect, useState } from 'react'
import LogoWeb from '../../assets/images/logo.png';
import {MdSearch} from 'react-icons/md';
import styled from'styled-components';
import {useScrollY} from '../customHook/useScrollY';
import { useNavigate } from 'react-router-dom';
export default function Navbar(props) {
   const [scrollY]=useScrollY();
   const [keyworks,setKeyWorks]=useState('');
   const navigate = useNavigate();
   const handleChange=(e)=>{
     let kq=e.target.value;
     setKeyWorks(e.target.value);
     if(kq.length>0){
      
      navigate(`/search?keywords=${kq.trim()}`);
     }else{
       navigate('/');
     }
  
   }
  const goHome=()=>{
    setKeyWorks('');
    navigate('/');
  }
  return (
    <Navigation style={scrollY<50?{backgroundColor:'transparent'}:{backgroundColor:'var(--color-bg)'}}>
      <div className="navContainer">
        <div className='logo' onClick={goHome}>
          <img src={LogoWeb} alt="" />
        </div>
        <div className='navSearch'>
          <MdSearch className='navSearch-icon'/>
          <input type="text" placeholder='Nhập tên phim ,tác giả...muốn tìm kiếm ,' onChange={handleChange} value={keyworks}/>
        </div>
      </div>
    
    </Navigation>
  )

}
const Navigation = styled.div`
  width:100%;
  height:80px;
  position:fixed;
  top:0;
  transition-timing-funciton:ease-in;
  transition: all 1s;
  z-index:10;
  @media only screen and (max-width:600px){
    height:100px;
  }

  .navContainer{
    background-color:transparent;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction:row;
    height:100%;
    @media screen and (max-width:600px){
      flex-direction:column;

    }
  }
  .logo{
    width:120px;
    cursor:pointer;
    img{
      width:100%;
    }
  }
  .navSearch{
    color:var(--color-white);
    padding-right:20px;
    display:flex;
    justify-content:flex-end;
    input{
      font-size:14px;
      border:1px solid #fff;
      color:white;
      outline:none;
      width:0;
      padding:10px;
      cursor:pointer;;
      opacity:0;
      boder-radius:10px;
      transition:width 0.5s;
      background:var(--color-bg);
      
      &:focus{
        padding-left:26px;
        width:300px;
        cursor:text;
        opacity:1;
        boder-radius:10px;
        

      }
    }
    
    &-icon{
      width:20px;
      height:20px;
      cursor:pointer;
      transform:translate(24px,10px);
      color:#bbb;
    
    }
    &:hover{
      .navSearch-icon{
        color:var(--color-white);

      }
    }
  }
`;