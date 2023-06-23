import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
<>
<div className="footer-container">
<div>

<motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
<Image src={"/logo.jpeg"} width={'150'} height={"150"} className='footer-logo'/>
</motion.div>
</div>

<div className="pages">
    <h3><Link href={"/academics"}> Academics</Link></h3>
    <h3><Link href={"/facilities"}>Facilities</Link></h3>
    <h3><Link href={"/buds-pre-school"}>BUDS Pre-school</Link></h3>
    <h3><Link href={"/events-and-activities"}>Events and Activities </Link></h3>
    <h3><Link href={"/admission"}>Admission </Link></h3>
    <h3><Link href={"/photo-gallery"}>Photo Gallery</Link></h3>
</div>
<p className='footer-content'> 
Copyright © 2023. St. Moses’s High School. All Rights Reserved. St. Moses’s High School admits students of any race, color, national and ethnic origin to all of the rights, privileges, programs, and activities generally accorded or made available to students at the school. It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, financial aid programs, and 
athletic and other school-administered programs.
</p>
<div className="social-icons">
  <div className="social-txt">
    <h4>Social Links :</h4>
  </div>
  <div className="icons">
  <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
 <Link href={"https://www.facebook.com/StMosesHighSchool"} target='blank'><Image src={"/facebook.png"} className='social-img' width={'30'} height={"30"}/></Link> 
 </motion.div>
 <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
 <Link href={"https://wa.me/8520033807"} target='blank'> <Image src={"/whatsapp.png"} className='social-img' width={'30'} height={"30"}/></Link>
 </motion.div>
 <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
 <Link href={"https://instagram.com/school.st.moses?igshid=MWI4MTIyMDE="} target='blank'><Image src={"/instagram.png"} className='social-img' width={'30'} height={"30"}/> </Link> 
 </motion.div>
  </div>
</div>
<p className='footer-domain'><Link href={"/"}>stmoseshighschool.in</Link></p>
</div>
</>
  )
}

export default Footer