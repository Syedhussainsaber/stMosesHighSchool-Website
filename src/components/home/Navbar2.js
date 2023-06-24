import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar2() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link href={"/"} className="nav__brand">
<Image src={"/logo.jpeg"} width={'105'} height={'95'} className='logo'/></Link>

      <ul className={active}>
      <li className="nav__item">
          <Link href={"/"} className="nav__link">Home</Link>
        </li>
        <li className="nav__item">
          <Link href={"/academics"} className="nav__link">Academics</Link>
        </li>
      
<li className="nav__item"><Link href={"/facilities"} className="nav__link">Facilities</Link></li>

<li className="nav__item"><Link href={"/buds-pre-school"} className="nav__link">BUDS Pre-school</Link></li>


<li className="nav__item"><Link href={"/events-and-activities"} className="nav__link">Events and Activities</Link></li>

<li className="nav__item"><Link href={"/admission"} className="nav__link">Admission</Link></li>

<li className="nav__item"><Link href={"/photo-gallery"} className="nav__link">Photo Gallery</Link></li>
      
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar2;


