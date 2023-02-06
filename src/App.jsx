import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import PocketBase from 'pocketbase'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      <Footer/>
    </>
    )
}

export default App