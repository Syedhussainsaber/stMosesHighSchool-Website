import Navbar from "@/components/home/Navbar"
import Footer from "@/components/common/Footer"
import Image from "next/image"
import { motion } from "framer-motion"
import ScrollToTopButton from "@/components/common/ScrollToTopButton "

const academics = ()=>{
    return <>
    <Navbar/>
<Image src={"/academics.jpeg"} width={"1000"} height={"500"} className="academics-img" alt={"Academics"} />

<div className="title">
<h2>Academics</h2>
<hr/>
</div>

<div className="academics-content">
<motion.div   
        initial={{ opacity: 0,scale:0 }}
        transition={{duration:1.1, delay:0.1 }} 
        whileInView={{opacity:1,scale:1 }}
        // animate={{ opacity: 1,scale:1}}

        >
<div className="assessments">
 <h4>Assessments:
</h4>
<p>
 Continuous and Comprehensive Evaluation [CCE] is followed in the school. Therefore, Four Formative Assessments [FAs] and two Summative Assessments [SAs] are conducted during the academic year as follows:
 <br />
 <span>FA 1: July</span>
<br />
<span>FA 2: August</span>
<br />
<span>FA3: November</span>
<br />
<span>FA 4: January</span>
<br />
<span>SA 1: October</span>
<br />
<span>SA 2: March / April</span>
<br />

The exact time table of all assessments is communicated to the students in the monthly schedule. Final results are announced in April.
</p>
</div>
</motion.div>

<motion.div   
        initial={{ opacity: 0,translateX:150 }}
        transition={{duration:1.2, delay:0.3 }} 
        whileInView={{opacity:1,translateX:0}}
        // animate={{ opacity: 1,scale:1}}
        >
<div className="ptm">
<h4>
Parent Teacher Association [PTA]:
</h4>
<p>
The school has a Parent Teacher Association as parents are an integral part of school education. Parents are encouraged to visit the school office in case of any issues. The matter is registered and efforts are made to resolve any issues immediately. Events like Parents’ Mela are a regular feature of the school.
Parents may visit on Independence Day & Republic Day to watch the events in all their grandeur.
We firmly believe and have proven each year
with the brilliant performance by our students that
excellence in studies with high ranks can be achieved
by keeping the body physically fit and the mind ready
for real life applications of all subjects. 
Results are declared at a Parent Teacher Meeting right after each assessment.
</p>
</div>
</motion.div>
<motion.div   
        initial={{ opacity: 0,translateX:-150 }}
        transition={{duration:1.2,delay:0.5 }} 
        whileInView={{opacity:1,translateX:0}}
        // animate={{ opacity: 1,scale:1}}
>
  
<div className="curriculum">
<h4>Curriculum:</h4>
<p>
The school is recognised by the government of Telangana. Thus the syllabus prescribed by the Department of Education of Telangana is followed. However, CBSE curriculum and teaching methods are adhered to, in order to bridge the gap between both the syllabi. Lessons from CBSE Syllabus are imparted through Smart Classes and other teaching learning activities.
</p>
</div>
</motion.div>
</div>
<ScrollToTopButton/>
<Footer/>
    </>
}

export default academics