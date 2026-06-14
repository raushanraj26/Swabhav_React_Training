import { useRef } from 'react';
import { useState } from 'react'


function App() {
  const [value, setValue] = useState("");
const city=useRef()
const displayCity=(event)=>{
  console.log(city.current.value);
}
  return (
    <>
      <input type="text"  value={value}  onChange={(e) => setValue(e.target.value)} />
<input type="text" ref={city} />
      <button onClick={displayCity}>Click Me!</button>

      <p>{value}</p>
    </>
  );
}
export default App
