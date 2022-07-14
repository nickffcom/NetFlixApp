import React from 'react'
import { randomRgbaColor } from '../../Until'
import {Link} from 'react-scroll';
export default function MenuItem({name,Icon,to}) {
  return (
    <Link className="menu-item"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="active"
    >
            <div className="icon">
             <Icon style={{color:randomRgbaColor(1)}}/>
            </div>
            <span className="title">{name}</span>
    </Link>
  )
}
