import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ProfileDynamic = () => {
    const param = useParams()
    const navigate = useNavigate()
  return (<>
    <div>ProfileDynamic</div>
    <p>ID is : {param.id}</p>
    <button onClick={()=>navigate('/home')}>Go to Home</button>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default ProfileDynamic