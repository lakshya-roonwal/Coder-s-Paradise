import React from 'react'
import { Link } from 'react-router-dom'
const ToolCard = ({url,title,description}) => {
  return (
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to={url}>
                <img src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" width={'100%'} className='rounded-lg'  alt="helllo" />
              <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
          </Link>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{description}</p>
          </article> 
  )
}

export default ToolCard