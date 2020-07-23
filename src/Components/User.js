import React from 'react'

function User({ details }) {
    // console.log(details)
//   if (!details) {
//     return <h3>Working fetching your User&apos;s details...</h3>
//   }

  return (
    <div className='user container'>
      <h2>{details.firstname} {details.lastname}</h2>
      <p>E-Mail: {details.email}</p>
    </div>
  )
}

export default User
