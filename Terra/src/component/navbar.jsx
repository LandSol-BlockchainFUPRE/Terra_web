import React from 'react'

const NavBar = () => {
  return (
    <div className='w-[75%] h-[50px] text-white mx-auto flex justify-between items-center p-2'>
        <h1 className='text-4xl font-bold'>Terra</h1>
        <div className='flex gap-4'>
            <button className='px-7 py-2 bg-green-400 rounded-2xl'>Sing up</button>
            <button className='px-7 py-2 bg-green-400 rounded-2xl'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default NavBar