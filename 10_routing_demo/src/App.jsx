import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProfileDynamic from './components/ProfileDynamic'
function App() {
  

  return (
    <>

<Navbar></Navbar>
<Routes>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/contact' element={<Contact></Contact>}></Route>
  <Route path='/profile/:id' element={<ProfileDynamic></ProfileDynamic>}></Route>
</Routes>

      </>
  )
}

export default App
