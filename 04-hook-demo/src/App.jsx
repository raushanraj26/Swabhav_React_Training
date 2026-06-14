
import { useState } from 'react'
import './App.css'

// function handleSubmit(event) {
//     event.preventDefault();
//   console.log("Form Submitted");
// }
function App() {
 const [number,setNumber]=useState(0);

 const IncrementNumber=(event)=>{
event.preventDefault();
console.log(number);
setNumber(number+1);
console.log("Incremented Number: ",number);
 }


  return (
    <>
      {/* <form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form> */}

<button onClick={IncrementNumber}>increment</button>
    </>
  )
}

export default App
