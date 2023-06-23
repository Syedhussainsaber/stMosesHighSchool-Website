import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {BiMenu} from "react-icons/bi"
import {TiDelete} from "react-icons/ti"
// import { motion} from "framer-motion"

const Navbar = () => {
 const [isNavVisible, setNavVisible] = useState(false);


  const handleClick = () => {
    setNavVisible(!isNavVisible);
  };
 
  return (
    <div className='navbar'>
<header>
    <div className='nav'>
   <div className="title">
    <Link href={"/"}>
<Image src={"/logo.jpeg"} width={'105'} height={'95'} className='logo'/></Link>
</div>

<nav className='navMenu'>
<div className="menu-icon">
  {
    isNavVisible?<TiDelete size={45} cursor={"pointer"} onClick={handleClick} />:
    <BiMenu size={45} cursor={"pointer"} onClick={handleClick} />
  }

</div>
        <ul className={isNavVisible?"closeItems": "navItems"}>
{/* <li><Link href={"/about"}>About</Link></li> */}
<li><Link href={"/academics"}>Academics</Link></li>
<li><Link href={"/facilities"}>Facilities</Link></li>
<li><Link href={"/buds-pre-school"}>BUDS Pre-school</Link></li>
<li><Link href={"/events-and-activities"}>Events and Activities</Link></li>
<li><Link href={"/admission"}>Admission</Link></li>
<li><Link href={"/photo-gallery"}>Photo Gallery</Link></li>

  </ul>
  </nav>
    </div>
    
</header>
        </div>
  )
}

export default Navbar