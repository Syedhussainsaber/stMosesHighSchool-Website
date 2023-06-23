import Navbar from "@/components/home/Navbar"
import Footer from "@/components/common/Footer"
import Image from "next/image"
import Link from "next/link"
import Contact from "@/components/Contact"
import { motion } from "framer-motion"
import ScrollToTopButton from "@/components/common/ScrollToTopButton "
import { getUserData } from "./api/database"
import { useEffect,useState } from "react"
import UsersCard from "@/components/UsersCard"
const admission = ()=>{

    const [admin, setAdmin] =  useState({})
    const [user, setUser] = useState([])
    useEffect(()=>{
        setAdmin({
            email: localStorage.getItem("email") ,
message:localStorage.getItem("message")
        })
    
    },[admin.email])


useEffect(()=>{
    try{
    
        getUserData(setUser).then((users)=>{
            setUser(users)
        })
        .catch((err)=>{
            console.log(err)
        })

    }
catch(err){
console.log(err)
}

},[])
    return <>
    <Navbar/>
    <Image src={"/admission.png"} width={"1000"} height={"500"} className="academics-img" alt="Admission" />

<div className="title">
<h2>Admissions</h2>
<hr/>
</div>

<div className="admission-content">
<motion.div   
        initial={{ opacity: 0,translateX:-150 }}
        transition={{duration:1.2,delay:0.2 }} 
        whileInView={{opacity:1,translateX:0}}
        // animate={{ opacity: 1,scale:1}}

        >
<p className="admission-para">
The process of admission involves a visit to the school along with the child. You may get all details about admission once you contact us on phone, SMS or WhatsApp on <span style={{color:"blue"}}><Link href={"https://wa.me/8520033807"}>8520033807</Link></span> [Monday to Saturday 8 am to 5 pm]
</p>
</motion.div>
<strong>Requirements at the time of admission:</strong>

<motion.div   
        initial={{ opacity: 0,translateX:150 }}
        transition={{duration:1.1, delay:0.1 }} 
        whileInView={{opacity:1,translateX:0}}>
<ul className="requirement-list">

<li>
4 photos of the child
    </li> 
<li>2 photos of each parent </li>
<li>AADHAR card copy </li>
<li>Copy of Date of Birth certificate </li>
<li> Caste certificate copy</li>
<li>School leaving certificate [Record Sheet for II to VI Class & Transfer Certificate for VII to X Classes]</li>
<li>Copy of report card of previous school and class</li>
<li>Copy of bona fide certificate of previous school &
class </li>
<li>Copy of vaccination chart </li>
<li>Medical Certificate stating that the child is not suffering from any allergy, chronic infection or handicap. </li>
</ul>
</motion.div>
</div>

<Contact/>
{
admin.email ==="school.st.moses@gmail.com" && admin.message === "st_moses_high_school"
?
<div className="users-data">
<h2>Users</h2>
<div className="items">
{user.map((item,i)=>{
return (
    
       <UsersCard index={i+1} name= {item?.name} email={item?.email} message= {item?.message} mobileNo = {item.mobNo}/>
   
)
})} 
 </div>
 </div>:<></>
}
<ScrollToTopButton/>


    <Footer/>
    </>
}

export default admission