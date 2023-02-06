import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
// import PocketBase from 'pocketbase'
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route exact path='/colors' element={<Body/>}/>
      </Routes>
      <Footer/>
    </>
    )
}

export default App