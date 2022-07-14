import React, { useEffect, useState } from 'react'

export  function useScrollY() {
    const[scrollY,setScrollY]=useState(0);
    const handleScrollY=()=>{
      const scrollY= window.scrollY||document.documentElement.scrollY;
      setScrollY(scrollY);
    }
    useEffect(()=>{
        handleScrollY();
        window.addEventListener('scroll',handleScrollY);
        return ()=>{
          window.removeEventListener('scroll',handleScrollY);
        }
    },[]);

    return ([scrollY]);
}
