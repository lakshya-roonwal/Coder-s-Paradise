import React from 'react'
import { Link } from 'react-router-dom'

const UIBlocksNavbar = ({navLinks}) => {
  return (
    <aside id="default-sidebar" class="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
  <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <ul class="space-y-2">
      {navLinks.map((link)=>{
        return (
          <li>
              <Link to={link.url} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="ml-3">{link.title}</span>
              </Link>
          </li>
        )
      })}
      </ul>
  </div>
</aside>
  )
}

export default UIBlocksNavbar