"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faList, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { it } from 'node:test'

export default function Navbar() {
  const [open, setOpen] = useState(false)

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Toggles the open state of the navbar.
   * If the navbar is currently open, this will close it.
   * If the navbar is currently closed, this will open it.
   * @function
   */
/*******  46be37c6-d67e-4339-9587-777b838d4152  *******/  const toggle = () => {
    setOpen(!open)
  }




  const menuitem = [
    { list: 'FEATURES', href: '/ayam', badge: 0 },
    { list: 'SHOP', href: '/ayam' },
    { list: 'TEST', href: '/ayam', badge: 0 },
    { list: 'PROFILE', href: '/ayam' },
    { list: 'MORE', href: '/ayam', badge: 40 },
    { list: 'MUSIC', href: '/ayam', badge: 0 },
    { list: 'MOVIES', href: '/ayam', badge: 10 },
    { list: 'MOVIES', href: '/ayam', badge: 0 },


  ]






  return (
    <>
      <div className='top-5 z-50 max-sm:absolute sticky flex flex-wrap justify-between items-center bg-white shadow-lg max-sm:shadow-none mx-2 px-12 py-7 rounded-full w-full'>
        <Image src="/Logo.png" alt='' width='150' height='150' className='2xl:w-[400px] xl:w-[200px] 2xl:h-[80px] xl:h-[40px]' />
        <div className='max-sm:hidden sm:hidden md:flex lg:flex 2xl:flex xl:flex'>
          <div className="flex gap-6" >


            {menuitem.map((item, index) => (
              <div className="flex">
                <Link key={index} href={item.href} className='font-light md:text-[8px] 2xl:text-[32px] xl:text-[16px]'>{item.list}</Link>
                {item.badge !== undefined && (
                  <span className='bg-black ml-[4px] px-1 border-2 border-black md:rounded-[2px] md:h-[8px] 2xl:h-[25px] xl:h-[15px] text-white md:text-[4px] 2xl:text-[16px] xl:text-[8px] animate-bounce'>{item.badge}</span>
                )}
              </div>
            ))}



          </div>


        </div>
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='max-sm:text-sm sm:text-sm md-text-lg text-2xl 2xl:text-4xl' />
          <a href='/userAuth' className='bg-[#FF4400] p-2 max-sm:px-3 sm:px-3 md:px-5 2xl:px-7 rounded-3xl font-light text-white max-sm:text-[5px] sm:text-[6px] md:text-[7px] xl:text-[10px] 2xl:text-xl text-center'>Sign In</a>
          <div className="md:hidden lg:hidden 2xl:hidden xl:hidden max-sm:text-sm sm:text-sm">
            <FontAwesomeIcon icon={open ? faXmark : faBars} className='cursor-pointer' onClick={toggle} />
          </div>
        </div>
      </div>

      {/* mobile dropdown uhuyy */}

      {open && (
        <div className="md:hidden lg:hidden 2xl:hidden xl:hidden block shadow-xl mt-30 w-full h-100 transition duration-[10s] ease">
          {menuitem.map((item, index) => (
            <div className="flex mt-5 ml-15">
              <Link href={item.href} className='w-90 font-regular text-md' >{item.list}</Link>
              {item.badge !== undefined && (
                <span className='bg-black px-2 py-1 border-2 border-black rounded-[4px] text-[10px] text-white'>{item.badge}</span>
              )}

            </div>

          ))}

        </div>
      )}



    </>
  )
}









