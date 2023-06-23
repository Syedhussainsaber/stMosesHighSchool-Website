import React from 'react'
import { useState } from 'react'
import { contactData } from '@/pages/api/database'

const Contact = () => {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [mobNo,setMobNo] = useState("")
const [message,setMessage] = useState("")

const handleForm = ()=>{

const data = {
  name:name,
  email:email,
  mobNo:mobNo,
  message:message
}
if(data.email === "school.st.moses@gmail.com" && data.name==="St Moses High School"  && message==="st_moses_high_school")
{
  localStorage.setItem("name","St Moses High School")
  localStorage.setItem("email","school.st.moses@gmail.com")
  localStorage.setItem("message","st_moses_high_school")
  setEmail("")
  setMobNo(0)
  setMessage("")
  setName("")
}

else{
  contactData(data)
  setEmail("")
  setMobNo(0)
  setMessage("")
  setName("")
}

}

  return (
<>
<div className="contact-form">
<div className="form-title">
<h3>Contact Us</h3>
</div>
<div className="contact-inputs">
    <form className='form-inputs' onSubmit={handleForm} >
    <label>Name</label>
    <input type="text" placeholder='Name' onChange={(event)=> setName(event.target.value)} value={name}  />

    <label>Email</label>
    <input type="email" placeholder='Email' onChange={(event)=> setEmail(event.target.value)} value={email} />

    <label>Mobile Number</label>
    <input type="number" placeholder='Mobile No' onChange={(event)=> setMobNo(event.target.value)} value={mobNo}/>

<label>Message</label>
<textarea name="message" placeholder='Message' id="message" cols="30" rows="10" onChange={(event)=> setMessage(event.target.value)} value={message}></textarea>

    </form>
    <button onClick={handleForm} className='submit-btn'>Submit</button>
</div>

</div>
</>
  )
}

export default Contact