import React from 'react'

const MemberRow = ({id,name,role,initials,experience}) => {
  return (
    <>
    <div className='member' key={id}>
      <p>{initials}</p>
      <p>{name}</p>
      <p>{role}</p>
      <p>{experience} years</p>
    </div>
    </>
  )
}

export default MemberRow