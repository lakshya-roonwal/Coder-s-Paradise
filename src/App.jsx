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
import UIBlocks from './pages/UIBlocks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <div className='flex flex-col justify-between min-h-screen dark:bg-gray-900 m-0'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/codesnap" element={<CodeSnap/>} />
          <Route path="/uiblocks/*" element={<UIBlocks/>} />
        </Routes>
      <Footer/>
    </div>
      </BrowserRouter>

    </>
  )
}

export default App
