import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Buttons from './tabs/Buttons'
import HomeTab from './tabs/HomeTab'
import Cards from './tabs/Cards'
import Forms from './tabs/Forms'

const UIBlocksMainTab = () => {
  return (
    <div className='w-full p-4'>
        <Routes>
            <Route path='/' element={<HomeTab/>}/>
            <Route path='/buttons' element={<Buttons/>}/>
            <Route path='/cards' element={<Cards/>}/>
            <Route path='/forms' element={<Forms/>}/>
        </Routes>
    </div>
  )
}

export default UIBlocksMainTab