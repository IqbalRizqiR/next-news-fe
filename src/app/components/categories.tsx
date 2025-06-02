import React from 'react'


interface categoriesProps {
  categories: string[];
  href: string
}
const categories1: React.FC<categoriesProps> = async ({ categories }) => {
  return (
    <div className="flex gap-2 mt-[16px]">
      {categories.map((category, index) => (
        <a href="" key={index} className="hover:bg-black hover:shadow-lg px-[8px] py-[4px] border-2 border-white rounded-[14px] font-light text-[16px] text-white hover:text-white">{category}</a>
      ))}
      <a href="" className="hover:bg-black hover:shadow-lg px-2 py-1 border-2 border-gray-300 rounded-[50%] text-[16px] text-white hover:text-white text-center">&#8226;&#8226;&#8226;</a>
    </div>
  )
}


export default categories1
