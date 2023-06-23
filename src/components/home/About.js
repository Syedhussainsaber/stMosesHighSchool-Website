import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

const About = () => {

  return (
<>
<div className="about-container">
<h1 className='about-title'>About Us</h1>
  
    <div className="about-content">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
<Image src={"/school front.jpg"} className='about-img' width={'300'} height={'200'}/>
</motion.div>
<div className="about-para">


<div className="sub-heading"><h2>Introduction
    </h2></div>

 <motion.div   
        initial={{ opacity: 0,scale:0 }}
        transition={{duration:1 }} 
        whileInView={{opacity:1,scale:1 }}
        // animate={{ opacity: 1,scale:1}}

        >
          <p>
          <strong>St. Moses High School</strong>: A Model School With All Facilities was established in June 1995 with the sole aim of “Providing All Round Development”. The founder of the school, Mr. Syed Jafer, established this institution with the precept <strong>INTEGRITY- ENLIGHTENMENT-PRUDENCE</strong>, imparting curriculum & physical education with consistent obedience for exemplary conduct. It is an English Medium Co-Education school. It follows SSC Curriculum with special emphasis on CCE Pattern for 6th to 10th classes. For 1st to 5th classes, CBSE curriculum is followed.
          </p>
       </motion.div>
  

</div>

</div>


<div className="management-content">
    <div className="management-para">
        <h2 className='sub-heading'>Management</h2>
        <motion.div   
        initial={{ opacity: 0,translateX:-150 }}
        transition={{duration:1 }} 
        whileInView={{opacity:1,translateX:0}}
        // animate={{ opacity: 1,scale:1}}
>
        <p>The school is managed by St.Moses Education Society (Registered in 1995). Has an experience of 24 years in academics.</p>
        </motion.div>
    </div>
    <motion.div   whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
    <Image src={"/management.jpeg"} width={"500"} height={"500"} className='faculty-img'/>
    </motion.div>
</div>

</div>
</>
  )
}

export default About