import Navbar from "@/components/home/Navbar"
import Footer from "@/components/common/Footer"
import Image from "next/image"
import EventCard from "@/components/events-card/EventCard"
import ScrollToTopButton from "@/components/common/ScrollToTopButton "

const eventsAndActivities = ()=>{
    return <>
    <Navbar/>
   
    <Image src={"/events.png"} width={"880"} height={"450"} className="academics-img" alt="Events and Activities" />


    <div className="title">
<h2>Events and Activities</h2>
<hr/>
</div>

<div className="cards">
<EventCard image={"/fitness.jpg"} content={"St.Moses High School has a Playground of 4 acres with expert coaching in sports like Athletics, Cricket, Tennis, Volleyball, etc. and a special hall for Indoor Games like Table Tennis, Carroms & Chess. Our students also participated in Sports at district and Mandal levels. Regular basic coaching in athletics, volleyball, football, cricket, badminton, khokho and kabaddi is given in the school every day. However, students can be enrolled in special coaching in games and sports before and after school hours."} title={'Sports & Games'} />

<EventCard image={"/scrouts.jpg"} content={"The Bharath Scouts & Guides provides training to our students & conducts regular camps in the school premises & their Headquarters at Jeedimetla village. Our scouts participate in the Republic Day parades at Parade grounds & Independence Day parades at Golkonda fort."} title={'Scouts & Guides Program'} />

<EventCard image={"/fieldtrip.png"} content={"Excursions are regularly conducted to places of interest related to Education as well as Entertainment. A few places our students have visited are Pochampally Handicraft Village, Ramoji Film City, The Hindu Newspaper Press, Paper bag making workshop, Ocean Park, Dhola ri Dhani, Horticultural Expo, malls, post office, airport, railway station."} title={'Field Trips'} />

<EventCard image={"/crafts.jpg"} content={"Our Art & Craft partner is Pidilite India, who conduct Fevicryl Hobby Ideas Workshops in our school regularly. Their artists come down to the school to train the students in various arts like tile, fabric and glass painting, clay moulding, pot designing and many other things."} title={'Arts & Craft'} />

<EventCard image={"/crafts.jpg"} content={"Our news partner is The Hindu @ School, who provide a weekly news magazine, Young World to our students of 6th to 10th classes. This contains not only news but a number of interesting articles, games and activities for students to learn from. Regular newspaper sessions are also conducted in the school."} title={'Newspapers'} />
</div>
<ScrollToTopButton/>
    <Footer/>
    </>
}

export  default eventsAndActivities