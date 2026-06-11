import React from 'react'
import MemberRow from "./MemberRow";
const TeamSection = ({department,members}) => {
  return (
    <>
    <h1>{department}</h1>
    <h2>Total members:{members.length}</h2>
   { members.map((member)=>(<MemberRow
          key={member.id}
          name={member.name}
          role={member.role}
          experience={member.experience}
          initials={member.initials}
        />))}
    </>
  )
}

export default TeamSection