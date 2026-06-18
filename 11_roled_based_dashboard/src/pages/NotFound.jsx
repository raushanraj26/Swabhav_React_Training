import React from 'react'

const NotFound = () => {
  return (
    <>
    <h1>404 Not Found</h1>
    <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </>
  
  )
}

export default NotFound