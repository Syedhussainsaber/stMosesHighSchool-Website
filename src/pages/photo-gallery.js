// import Navbar from "@/components/home/Navbar"
import Navbar2 from "@/components/home/Navbar2"
import Footer from "@/components/common/Footer"
import PgCard from "@/components/PgCard"
import ScrollToTopButton from "@/components/common/ScrollToTopButton "

const photoGallery = ()=>{
return <>
<Navbar2/>

<div className="title">
<h2>Photo Gallery</h2>
<hr/>
</div>

<div className="images-container">
<PgCard imgSrc={'/pg1.jpg'}/>
<PgCard imgSrc={'/pg2.jpg'}/>
<PgCard imgSrc={'/pg3.jpg'}/>
<PgCard imgSrc={'/pg4.jpg'}/>
<PgCard imgSrc={'/pg5.jpg'}/>
<PgCard imgSrc={'/pg6.jpg'}/>
<PgCard imgSrc={'/pg7.jpg'}/>
<PgCard imgSrc={'/pg8.jpg'}/>
<PgCard imgSrc={'/pg9.jpg'}/>
<PgCard imgSrc={'/pg10.jpg'}/>
<PgCard imgSrc={'/pg11.jpg'}/>
<PgCard imgSrc={'/pg12.jpg'}/>
<PgCard imgSrc={'/pg13.jpg'}/>
<PgCard imgSrc={'/pg14.jpg'}/>
<PgCard imgSrc={'/pg15.jpg'}/>
<PgCard imgSrc={'/pg16.jpg'}/>

</div>
<ScrollToTopButton/>
<Footer/>
</>
}
export default photoGallery