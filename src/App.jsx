import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Home/Navbar'
import Hero from './components/Home/Hero'
import ToolsSection from './components/Home/ToolsSection'
import Footer from './components/Home/Footer'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import CodeSnap from './pages/CodeSnap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-between border-4 min-h-screen'>
      <Navbar/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/codesnap" element={<CodeSnap/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>

    </>
  )
}

export default App
