import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Shopping from './components/Shopping'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>This is the App</div>
      <Header />
      <Home /> || <Shopping />
      <Footer />
    </>
  )
}

export default App
