import React, { useState } from 'react'
import NavBar from '../component/navbar'
import Accordian from '../component/accordian'
import accordianData from '../lib/accordianData'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='hero-bg w-full h-screen'>
        <div className='mx-auto'>
            <NavBar/>
        </div>

        {/* center hero text */}
        <div className='text-white w-[65%] mx-auto mt-[2%] pb-[2%] rounded-4xl shadow-md glass'>
            <div className='text-center p-4'>
                <h1 className='text-5xl'>Welcome to <span>Terra</span>.</h1>
                <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum incidunt debitis praesentium 
                    at explicabo sed tempora perspiciatis beatae? Placeat, tenetur?
                </p>
            </div>

            <div className='w-[70%] mx-auto'>
                <div className='flex gap-2'>
                    <div className='w-full'>
                        <input type="file" className='p-2 border-2 border-white rounded-md w-full'/>
                    </div>
                    <button onClick={() => setIsOpen(true)} className='bg-green-400 px-12 py-2 rounded-md text-white'>Upload</button>
                </div>
                <div className='mt-4 flex gap-4'>
                    <button className='bg-green-400 px-12 py-2 rounded-md text-white'>Transfar Ownership</button>
                    <button className='bg-green-400 px-12 py-2 rounded-md text-white'>Marketplace</button>
                    <button className='bg-green-400 px-12 py-2 rounded-md text-white'>View Properties</button>
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

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              {/* <DialogTrigger>Open</DialogTrigger> */}
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.

                    {/* <Button onClick={() => setIsOpen(false)}>Close</Button> */}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* last button */}
            <div className='w-full flex justify-end'>
              <button className='bg-green-400 px-12 py-3 rounded-md text-white'>Chat with AI</button>
            </div>
        </div>
    </div>
  )
}

export default Home