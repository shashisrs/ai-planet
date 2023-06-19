import React from 'react'
import {BsSearch} from 'react-icons/bs';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {categories} from '../categories.js';
import CategoryItem from './CategoryItem.js';
const CategoriesSection = () => {
const scrollLeft=()=>{
document.querySelector('.carousel').scrollLeft-=110;
}
const scrollRight=()=>{
  document.querySelector('.carousel').scrollLeft+=110;
}

  return (
    <div className='flex flex-col items-center w-10/12 mx-auto gap-3 mt-[11.625rem]'>
      <h2 className='text-[#e26dff] text-2xl md:text-4xl font-bold'>AI-PLANET</h2>
      <p className='text-[#989bd7] text-md sm:text-lg md:text-xl text-center'>A platform where you can find all ai tools according to use</p>
      <div className="bg-white border-2 border-[#e073ff]  mb-3 w-full rounded-full p-1">
        <div className="flex items-center gap-3 p-2 pl-3 pr-6 bg-[#4fbeff] w-[50%] md:w-[20%] rounded-full text-white">
            <BsSearch />
            <input placeholder="Search" className="bg-transparent outline-none placeholder:text-white w-full"/>
        </div>
        </div>
      <div className='flex items-center  w-screen sm:w-full justify-between text-[#6d696b]'>
        <button className=' border sm:border-2 border-[#e073ff] rounded-full text-[10px] sm:text-base ml-1 sm:ml-0 px-2 py-1 sm:pl-6 sm:pr-6'>Category</button>
        <button onClick={scrollLeft} className='text-black text-[12px] sm:text-base'><AiOutlineArrowLeft /></button>
        
        <div className='carousel scroll-smooth transition duration-500 scrollbar-hide flex md:w-[60%] lg:w-[70%] w-[55%] sm:w-[50%] overflow-x-auto'>{
          categories.map((item,index)=>{
            return <CategoryItem className="" key={item.id} title={item.title} />
          })
        }</div>
        <button onClick={scrollRight} className='text-black text-[12px] sm:text-base'><AiOutlineArrowRight /></button>  
        <button className=' border sm:border-2 border-[#e073ff] rounded-full text-[10px] sm:text-base mr-1 sm:mr-0 px-1 py-1 sm:pl-6 sm:pr-6  whitespace-nowrap'>Sort By-</button>
      </div>
    </div>
  )
}

export default CategoriesSection