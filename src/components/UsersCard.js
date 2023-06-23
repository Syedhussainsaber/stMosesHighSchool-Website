import React from 'react'

const UsersCard = ({index,name,email,message,mobileNo}) => {
  return (
<>
<div className="user-details">
<h4>{index}. Name: {name}</h4>
<p>Email: {email}</p>
<p>Message: {message}</p>
<p>MobileNo: <span  className='mobNo's>{mobileNo}</span></p>
</div>

</>
  )
}

export default UsersCard