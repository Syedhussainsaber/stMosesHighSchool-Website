import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Mission = () => {
  return (
<>
<div className="mission-container">
<div className="mission-title">
    <h2>Mission</h2>
</div>
<div className="mission-content">
<motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
<Image src={"/mission.png"} width={"450"} height={"300"} className='mission-img'/>
</motion.div>
<motion.div   
        initial={{ opacity: 0,translateX:150 }}
        transition={{duration:1.1, delay:0.1 }} 
        whileInView={{opacity:1,translateX:0}}
        // animate={{ opacity: 1,scale:1}}
        >
<p className='mission-para'>
Our mission is to give a strong foundation to our students so that they reach great heights in academics and whatever they choose to do even long after they leave school.
<br/>
<br/>
<strong style={{color:"green"}}>SSC Results</strong>
<br/>
St. Moses holds the distinction of being one of the few schools to get highest percentage of students scoring 10 points in SSC Public Examinations each year. Since its inception, SSC Board Examination Results have been excellent always and 100% many times. 

We firmly believe and have proven each year
with the brilliant performance by our students that
excellence in studies with high ranks can be achieved
by keeping the body physically fit and the mind ready
for real life applications of all subjects
</p>
</motion.div>
</div>

</div>
</>
  )
}

export default Mission