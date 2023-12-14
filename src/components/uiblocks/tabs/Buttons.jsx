import React from 'react'
import CodeShower from '../CodeShower'

const Buttons = () => {
  const code = `// Your code here
  function helloWorld() {
    console.log('Hello, World!');
  }`;
  return (
    <div className='flex flex-col justify-start'>
      <h1 className="text-3xl font-bold">Buttons</h1>
      <CodeShower code={code}/>
      <div className='my-2'>
        <h2 className='text-2xl font-semibold'>Default button</h2>
        <p>Here are some Default button</p>
      </div>
      <div className='my-2'>
        <h2 className='text-2xl font-semibold'>Button pills </h2>
        <p>Here are some Button pills </p>
      </div>
      <div className='my-2'>
        <h2 className='text-2xl font-semibold'>Gradient monochrome</h2>
        <p>Here are some Gradient monochrome</p>
      </div>
      <div className='my-2'>
        <h2 className='text-2xl font-semibold'>Colored shadows </h2>
        <p>Here are some Colored shadows </p>
      </div>
      <div className='my-2'>
        <h2 className='text-2xl font-semibold'>Outline buttons</h2>
        <p>Here are some Outline buttons</p>
      </div>
      <div className='my-2'>
        <h2 className='text-2xl font-semibold'>Button sizes</h2>
        <p>Here are some Button sizes</p>
      </div>
      <div className='my-2'>
        <h2 className='text-2xl font-semibold'>Disabled </h2>
        <p>Here are some Disabled </p>
      </div>
    </div>
  )
}

export default Buttons