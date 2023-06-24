import React from 'react'
import Image from 'next/image'


const EventCard = ({title,image,content}) => {
  return (
 <>
 <div className="events">

 <div className="event-card">
<div className="event-title">
    <h3>{title}</h3>
</div>
    <Image src={image} width={"200"} height={"200"} className='event-img' alt={title}></Image>
<div className="event-content">
    <p>
    {content}
    </p>
</div>
 </div>

 </div>
 </>
  )
}

export default EventCard
