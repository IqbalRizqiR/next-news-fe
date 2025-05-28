import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const navbar = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between items-center mx-auto px-12 py-10 w-full'>
        <Image src="/Logo.png" alt='' width='300' height='300' />
        <div className="flex gap-6" >
          <Link href='/ayam' className='font-light text-[16px] 2xl:text-[32px]'>FEATURES</Link>
          <div className="flex">
            <Link href='/ayam' className='font-light text-[16px] 2xl:text-[32px]'>POP CULTURE</Link>
            <span className='ml-[4px] px-1 border-2 border-black rounded-[4px] h-[17px] text-[8px]'>13</span>
          </div>
          <div className="flex">
            <Link href='/ayam' className='font-light text-[16px] 2xl:text-[32px]'>DESIGN</Link>
            <span className='ml-[4px] px-1 border-2 border-black rounded-[4px] h-[17px] text-[8px]'>42</span>
          </div>
          <Link href='/ayam' className='font-light text-[16px] 2xl:text-[32px]'>FASHION</Link>
          <Link href='/ayam' className='font-light text-[16px] 2xl:text-[32px]'>MUSIC</Link>
          <div className="flex">  
            <Link href='/ayam' className='font-light text-[16px] 2xl:text-[32px]'>EVENTS</Link>
            <span className='ml-[4px] px-1 border-2 border-black rounded-[4px] h-[17px] text-[8px]'>12</span>
          </div>
          <Link href='/ayam' className='font-light text-[16px] 2xl:text-[32px]'>SHOP</Link>

        </div>
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl 2xl:text-4xl' />
          <a href='/' className='bg-[#FF4400] p-2 2xl:p-4 rounded-3xl w-[102px] 2xl:w-[142px] font-light text-white text-lg 2xl:text-xl text-center'>Sign In</a>
          <FontAwesomeIcon icon={faList} className='text-2xl 2xl:text-4xl' />
        </div>


      </div>


    </>
  )
}

export default navbar