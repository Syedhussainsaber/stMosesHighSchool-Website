import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"
const Vision = ()=>{

return <>
<div className="vision-container">
    <h2 className="vision-title">Vision</h2>
    <motion.div   
        initial={{ opacity: 0,scale:0 }}
        transition={{duration:1 }} 
        whileInView={{opacity:1,scale:1 }}
        // animate={{ opacity: 1,scale:1}}
        >
    <div className="vision-content">
   
    <ul className="vision-list">
<li>Belief that a child of today is the citizen of tomorrow.</li>
<li>Education through which the physical, intellectual, aesthetic, moral and spiritual potentialities of the child are developed.</li>
<li>Development of character& the attainment of knowledge.</li>
<li>Acquisition of skill, and ultimately, the making of a worthy citizen.</li>
<li>Better facilities and opportunities for the children, according to their interests, abilities and physique and mentality for the all round development.</li>
<li>Training in vocational skills, social skills & sports.</li>
    </ul>

    <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
<Image src={"/visionImg.png"} width={"200"} height={"200"} className="vision-img"/>
</motion.div>
</div>
</motion.div>
</div>
</>
}
export default Vision;
