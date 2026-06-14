import { useState } from 'react'



function FormRegistration() {
  const [name,setName] = useState("")
  const [number,setNumber] = useState("")
  const [email,setEmail] = useState("")
  const [course,setCourse] = useState("")
  const [bio,setBio] = useState("")
  const [skills,setSkills] = useState([])
  const [skill, setSkill] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault(); // default form submit behavior stop
  console.log("Form Submitted");
}; 
  return (
    <>
     <div className="container1">
       <form onSubmit={handleSubmit} action="">
        fullName:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br /> <br />
      Phone Number:
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
      <br /> <br />
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br /> <br />
      Course:
      <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
      <br /> <br />
      Bio:
      <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
      <br /> <br />
      Skills:
      <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)} /> 
      <button onClick={() =>{ setSkills([skill,...skills ]);setSkill("");
} }>Add Skill</button>
      <button onClick={() => setSkills([])}>Clear Skills</button>
      
      <br /> <br />
      <button type='submit'>Submit</button>
      </form>
     </div>
     <div className="container2">
      <h1>Live Preview </h1>
      <p>Name: {name}</p>
      <p>Phone Number: {number}</p>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
      <p>Bio: {bio}</p>
      <p>Skills: {skills.join(", ")}</p>
      
     </div>
    </>
  )
}

export default FormRegistration
