import React from 'react'
import{FaHome,FaHotjar,FaStar} from 'react-icons/fa';
import{
GiNinjaHeroicStance,
GiRomanToga,
GiGhost,
GiBandageRoll
} from'react-icons/gi';
import {MdTheaterComedy} from 'react-icons/md';
import styled from 'styled-components';
import MenuItem from '../MenuItem/MenuItem';
export default function Menu() {
  return (
    <MenuPanel>
       <MenuItem name="Home" Icon={FaHome} to='NetFlix'/>
       <MenuItem name="Trending" Icon={FaHotjar} to='Trending'/>
       <MenuItem name="Top rated" Icon={FaStar} to='TopRated'/>
       <MenuItem name="Action Movies" Icon={GiNinjaHeroicStance} to='Action'/>
       <MenuItem name="Comedy Movies" Icon={GiRomanToga} to='Comedy'/>
       <MenuItem name="Horror Movies" Icon={GiGhost} to='Horror'/>
       <MenuItem name="Romance Movies" Icon={GiBandageRoll} to='Romance'/>
       <MenuItem name="Documentaries" Icon={MdTheaterComedy} to='Documentaries'/>
    </MenuPanel>
  )
}
const MenuPanel=styled.div`
    position:fixed;
    left:0;
    top:20%;
    width:55px;
    padding:4px;
    
    background-color:#333;
    opacity:0.7;
    display:flex;
    z-index:25;
    flex-direction:column;
    
    transition:all 0.3s linear;
    overflow:hidden;
    &:hover{
        width:200px;
        opacity:1;
        background:rgba(220,220,220,0.6);
        background-color:#333;
    }
    .menu-item{
        display:flex;
        align-items:center;
        margin-left:6px;
        padding:4px 6px;
        cursor:pointer;
        width:max-content;
        .icon{
            font-size:30px;
            margin-right:8px;
        }
        .title{
            font-size:14px;
            font-weight:400;
            color:rgba(255,255,255,0.6);
            &:hover{
                color:#fff;
                font-size:16px;
                opacity:1;
            }
        }
    }
`;