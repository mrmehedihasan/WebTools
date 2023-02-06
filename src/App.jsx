import React from 'react'
import Navbar from './Components/Navbar'
import Colors from './Components/Colors'
import Css from './Components/Css'
// import PocketBase from 'pocketbase'
import Image from './Components/Image'
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/css' element={<Css/>}/>
        <Route exact path='/colors' element={<Colors/>}/>
        <Route exact path='/image' element={<Image/>}/>
      </Routes>
      <Footer/>
    </>
    )
}

export default App