import React from 'react'
import notFound from '../assets/notFound.png'
function PageNotFound() {
  return (
    <div className='h-screen w-full bg-black flex justify-center text-white items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className=' text-9xl'>404</h1>
            <p>
                Page Not Found
            </p>
        </div>
        <img src={notFound} alt="" />
    </div>
  )
}

export default PageNotFound
