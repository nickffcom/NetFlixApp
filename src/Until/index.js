import React from 'react'

export default function SmoothHoriziontalScrolling(e,time,amount,start) {
    var eAmt=amount/100;
    var curtime=0;
    var scrollCounter=0;
    const y =window.scrollY;
    while(curtime<=time){
        window.setTimeout(SHS_B,curtime,e,scrollCounter,eAmt,start,y);
        curtime+=time/100;
        scrollCounter++;
    }
    window.scrollTo(0,y);

}
function SHS_B(e,sc,eAmt,start,y){
    e.scrollLeft=eAmt*sc+start;
}
export function randomRgbaColor(opacity){
 const R=Math.round(Math.random()*256);
 const G=Math.round(Math.random()*256);
 const B=Math.round(Math.random()*256);
 let color=`rgba(${R},${G},${B},${opacity})`;
 return color;
}