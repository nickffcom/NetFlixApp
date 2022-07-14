import React, { useState,useEffect } from 'react'

export const useViewport=()=> {
    const[windowWidth,setWindowWidth]=useState(window.innerWidth||document.documentElement.clientWidth);

    useEffect(() => {
        const handleWidth=()=>{
            const width=window.innerWidth||document.documentElement.clientWidth;
            setWindowWidth(width);
        }
        handleWidth();
        window.addEventListener('resize',handleWidth);
        return ()=>{window.removeEventListener('resize',handleWidth)}
    }, []);
    return [windowWidth];
}
