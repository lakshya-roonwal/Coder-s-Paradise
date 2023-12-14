import React from 'react'
import UIBlocksNavbar from '../components/uiblocks/UIBlocksNavbar'
import UIBlocksMainTab from '../components/uiblocks/UIBlocksMainTab'

const UIBlocks = () => {
  const navLinks=[
    {
      title:"Home",
      url:"/uiblocks/"
    },
    {
      title:"Buttons",
      url:"/uiblocks/buttons"
    },
    {
      title:"Cards",
      url:"/uiblocks/cards"
    },
    {
      title:"Forms",
      url:"/uiblocks/forms"
    },
  ]
  return (
    <div class="py-8 px-4 mx-auto w-full max-w-screen-lg min-w-screen-lg lg:py-16 lg:px-6 ">
        <div className='flex '>
          <UIBlocksNavbar  navLinks={navLinks}/>
          <UIBlocksMainTab/>
        </div>        
    </div>
  )
}

export default UIBlocks