// import Navbar from "@/components/home/Navbar"
import Navbar2 from "@/components/home/Navbar2"
import Footer from "@/components/common/Footer"
import Image from "next/image"
import { motion } from "framer-motion"
import ScrollToTopButton from "@/components/common/ScrollToTopButton "

const budsPreSchool =()=>{
return <>
<Navbar2/>
<Image src={"/buds.jpg"} width={"1000"} height={"450"} className="academics-img" alt="Buds-Pre-School" />

<div className="buds-container">
<div className="title">
<h2>Buds Pre School</h2>
<hr/>
</div>

<div className="buds-content">
    <div className="content-title">
        <h3>Curriculum</h3>
    </div>
    <motion.div   
        initial={{ opacity: 0,scale:0 }}
        transition={{duration:1 }} 
        whileInView={{opacity:1,scale:1 }}
        // animate={{ opacity: 1,scale:1}}

        >
<p className="buds-para">
A special play & learn method based “BUDS” curriculum is followed in Pre-primary classes making learning a beautiful and active experience for young children.
Our preschool staff is specially trained to follow this curriculum in the classes.
Our motto: Every day at BUDS Preschool should be a new experience.
</p>
</motion.div>
</div>
</div>
<ScrollToTopButton/>
<Footer/>
</>
}

export default budsPreSchool