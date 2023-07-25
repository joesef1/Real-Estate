import React from 'react'
import Location from '../components/Location'
import  '../App.css'

const FilterSection = () => {
  

  return (
    <div className=''>
    <h1 className='mb-4 px-4 font-bold text-[17px]'>  Filters </h1>
    <hr  className=' w-full'/>



<div className=' my-4   px-4'>
  {/* <Location/> */}
  <h2 className='mb-5 font-bold text-[17px] my-3'>LOCATION</h2>

</div>

<hr  className=' w-full'/>

<div className=' my-4 '>

<div className='px-4'>
    {/* PRICE */}
    <h2 className='mb-5 font-bold text-[17px] my-3'>PRICE</h2>
  <div className=' mb-8 flex justify-between items-center gap-4'>
    <div> <input className=' w-[128px]  border-b-[1px] border-gray-300 p-2 bg-[#F7F8F8] outline-none' type="number" /></div>
    <div> <input className=' w-[128px]  border-b-[1px] border-gray-300 p-2 bg-[#F7F8F8] outline-none' type="number" /></div>
  </div>
  {/* PRICE */}
  
</div>

<hr  className=' w-full'/>



<div className='px-4 mt-7'>
  <h1 className='mb-5 font-bold text-[17px]'>PROPERTY TYPE</h1>
    {/*  */}
    <label class="flex justify-start items-start">
    <div className=' flex items-center'>
      <div class=" bg-white border-2 rounded  border-gray-300 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2  focus:border-none ">
        <input type="checkbox" class="opacity-0 absolute  "/>
        <svg class="p-[3px] fill-current hidden  text-white rounded-[3px]   bg-black pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
      </div>
      <div class="select-none">Apartment (36) </div>
    </div>
  </label>
    {/*  */}      


    {/*  */}
    <label class="flex justify-start items-start">
    <div className=' flex items-center mt-3'>
      <div class=" bg-white border-2 rounded  border-gray-300 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2  focus:border-none ">
        <input type="checkbox" class="opacity-0 absolute  "/>
        <svg class="p-[3px] fill-current hidden  text-white rounded-[3px]   bg-black pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
      </div>
      <div class="select-none">villa (6)</div>
    </div>
  </label>
    {/*  */}      

</div>




</div>



    </div>
  )
}

export default FilterSection
