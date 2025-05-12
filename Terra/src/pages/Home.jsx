import React from 'react'
import NavBar from '../component/navbar'
import Accordian from '../component/accordian'
import accordianData from '../lib/accordianData'

const Home = () => {
  return (
    <div className='hero-bg w-full h-screen'>
        <div className='mx-auto'>
            <NavBar/>
        </div>

        {/* center hero text */}
        <div className='text-white w-[65%] mx-auto mt-[5%] rounded-4xl shadow-md glass'>
            <div className='text-center p-4'>
                <h1 className='text-5xl'>Welcome to <span>Terra</span>.</h1>
                <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum incidunt debitis praesentium 
                    at explicabo sed tempora perspiciatis beatae? Placeat, tenetur?
                </p>
            </div>

            <div className='w-[50%] mx-auto'>
                <div className='flex gap-2'>
                    <div className='w-full'>
                        <input type="file" className='p-2 border-2 border-black rounded-md w-full'/>
                    </div>
                    <button className='bg-green-400 px-12 py-2 rounded-md text-white'>Upload</button>
                </div>
                <div className='mt-4 flex gap-4'>
                    <button className='bg-green-400 px-12 py-3 rounded-md text-white'>Transfar Ownership</button>
                    <button className='bg-green-400 px-12 py-3 rounded-md text-white'>View Document</button>
                </div>
            </div>

            {/* accordian */}
            <div className="accordion mx-auto pt-[5%] pb-[5%]">
              {accordianData.map(({ title, message, id, number }) => (
                <Accordian
                  title={title}
                  message={message}
                  key={id}
                  number={number}
                />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Home