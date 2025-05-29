import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const navbar = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between items-center mx-auto px-12 py-10 w-full'>
        <Image src="/Logo.png" alt='' width='150' height='150' className='2xl:w-[400px] xl:w-[200px] 2xl:h-[80px] xl:h-[40px]' />
        <div className='max-sm:hidden sm:hidden md:flex lg:flex 2xl:flex xl:flex'>
          <div className="flex gap-6" >
            <Link href='/ayam' className='font-light md:text-[8px] 2xl:text-[32px] xl:text-[16px]'>FEATURES</Link>
            <div className="flex">
              <Link href='/ayam' className='font-light md:text-[8px] 2xl:text-[32px] xl:text-[16px]'>POP CULTURE</Link>
              <span className='ml-[4px] px-1 border-2 border-black rounded-[4px] md:rounded-[2px] md:h-[8px] 2xl:h-[30px] xl:h-[17px] md:text-[4px] 2xl:text-[16px] xl:text-[8px]'>13</span>
            </div>
            <div className="flex">
              <Link href='/ayam' className='font-light md:text-[8px] 2xl:text-[32px] xl:text-[16px]'>DESIGN</Link>
              <span className='ml-[4px] px-1 border-2 border-black rounded-[4px] md:rounded-[2px] md:h-[8px] 2xl:h-[30px] xl:h-[17px] md:text-[4px] 2xl:text-[16px] xl:text-[8px]'>42</span>
            </div>
            <Link href='/ayam' className='font-light md:text-[8px] 2xl:text-[32px] xl:text-[16px]'>FASHION</Link>
            <Link href='/ayam' className='font-light md:text-[8px] 2xl:text-[32px] xl:text-[16px]'>MUSIC</Link>
            <div className="flex">
              <Link href='/ayam' className='font-light md:text-[8px] 2xl:text-[32px] xl:text-[16px]'>EVENTS</Link>
              <span className='ml-[4px] px-1 border-2 border-black rounded-[4px] md:rounded-[2px] md:h-[8px] 2xl:h-[30px] xl:h-[17px] md:text-[4px] 2xl:text-[16px] xl:text-[8px]'>12</span>
            </div>
            <Link href='/ayam' className='font-light md:text-[8px] 2xl:text-[32px] xl:text-[16px]'>SHOP</Link>
          </div>


        </div>
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='max-sm:text-sm sm:text-sm md-text-lg text-2xl 2xl:text-4xl' />
          <a href='/' className='bg-[#FF4400] p-2 max-sm:px-3 sm:px-3 md:px-5 2xl:px-7 rounded-3xl font-light text-white max-sm:text-[5px] sm:text-[6px] md:text-[7px] xl:text-[10px] 2xl:text-xl text-center'>Sign In</a>
          <div className="md:hidden lg:hidden 2xl:hidden xl:hidden max-sm:text-sm sm:text-sm">
            <FontAwesomeIcon icon={faList} className='cursor-pointer' />
          </div>
        </div>
      </div>

    {/* mobile dropdown uhuyy */}
    <div className='hidden'></div>

    </>
  )
}

export default navbar