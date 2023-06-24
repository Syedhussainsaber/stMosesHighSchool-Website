// import Navbar from "@/components/home/Navbar"
import Navbar2 from "@/components/home/Navbar2"
import Footer from "@/components/common/Footer"
import Image from "next/image"
import { motion } from "framer-motion"
import ScrollToTopButton from "@/components/common/ScrollToTopButton "

const facilities = ()=>{

return <>
<Navbar2/>
<Image src={"/facilities.jpg"} width={"1000"} height={"500"} className="academics-img" alt="Facilities" />

<div className="title">
<h2>Facilities</h2>
<hr/>
</div>
<div className="content">
<motion.div   
        initial={{ opacity: 0,translateX:-150 }}
        transition={{duration:1.2,delay:0.5}} 
        whileInView={{opacity:1,translateX:0}}
        // animate={{ opacity: 1,scale:1}}>
        >
<div className="facilities-content">

     
    <ul className="facilities-list">
        <li><span>✓</span>Spacious building with bright & well ventilated classrooms with provision for smart class</li>
        <li><span>✓</span>Playground of 4 acres area for training in all games & sports</li>
        <li> <span>✓</span>Advanced Computer lab with latest Software for use by all students</li>
        <li> <span>✓</span>Science Laboratory, well-equipped for experiments & observation</li>
        <li> <span>✓</span>Library with a wide variety of wonderful books to read from</li>
        <li> <span>✓</span>Outdoor lessons for live experimentation & to provide a natural environment</li>
        <li> <span>✓</span>Art & Craft training given directly by Fevicryl Art Professionals</li>
        <li> <span>✓</span>RO purified drinking water for good health</li>
   <li><span>✓</span>Transport facility for students coming from far off
places</li>
    </ul>
   
    <motion.div   whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
<Image src={"/playground.jpg"} width={"300"} height={"300"} alt="School Playground" className="playground-img"></Image>
</motion.div>.
</div>
</motion.div>
</div>
<div className="content">
<motion.div   
        initial={{ opacity: 0,translateX:150 }}
        transition={{duration:1.2 }} 
        whileInView={{opacity:1,translateX:0}}
        // animate={{ opacity: 1,scale:1}}
        >
       
<div className="other-content">
    <ul className="facilities-list">
    <h3> Other Important Features:</h3>
        <li><span>✓</span> English speaking environment where children
love to, and are not forced to speak in the
language</li>
<li><span>✓</span>International teaching methodology based on ‘Do
& Learn’ concept</li>
<li><span>✓</span>Value Education & Life Skills provided by
counsellors based on SSC directives</li>
<li><span>✓</span>Parent connect programs for effective interaction
between the school & parents</li>
<li><span>✓</span>Child safety given due importance through
parental cooperation</li>
    </ul>
    <motion.div   whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
    <Image src={"/otherfacilities.jpg"} width={"300"} height={"300"} alt="School Playground" className="playground-img"></Image>
    </motion.div>
</div>
</motion.div>
</div>

<motion.div   
        initial={{ opacity: 0,scale:0 }}
        transition={{duration:1.5,delay:0.1 }} 
        whileInView={{opacity:1,scale:1 }}
        // animate={{ opacity: 1,scale:1}}
        >
<div className="details">
<ul className="staff-list">
<h3>Staff:</h3>
    <li>Highly qualified, skilled, experienced, sincere and hardworking staff is a highlight of the school.</li>
    <li>
    Teachers are also provided regular orientation and stress is laid on proper planning and execution of lessons.
    </li>
</ul>





 <ul className="staff-list">
 <h3>School Timings:</h3>
    <li>Nursery: 8:40am to 12:30pm</li>
    <li>LKg & UKg: 8:40am to 3pm</li>
    <li>Classes I to X: 8:40am to 3:40pm</li>
    <li>Daily practice in sports & games is given upto 4:15 for classes I to V and upto 5:15pm for classes VI to X.</li>
 </ul>

</div>
</motion.div>

<ScrollToTopButton/>

<Footer/>
</>
}

export default facilities