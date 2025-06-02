
import { title } from 'process'
import React from 'react'



  interface ButtonProps {
    title: string
    href: string
  }

const Button: React.FC<ButtonProps> = async ({title, href}) => {
  return (
    <>
      <div>


        <div className="flex items-center gap-5">

          <h1 className="font-light text-[36px] max-sm:text-[20px]">{title}</h1>
          <a href={href} className="px-[16px] py-[8px] border-2 border-black rounded-[24px] text-[16px] max-sm:text-[8px]">View All</a>
        </div>


      </div>

    </>
  )
}

export default Button













