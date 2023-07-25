import React from 'react'
import { BiBed } from 'react-icons/bi';
import { TbRulerMeasure } from 'react-icons/tb';
import { GrLocation } from 'react-icons/gr';

import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineMail} from 'react-icons/md';
import { MdOutlineCall } from 'react-icons/md';


const MainSection = () => {
  return (
    <div>
      
      
      <div   className=' flex flex-col gap-4'>

        
        {/*  */}
        <div className='  w-full flex p-4 gap-4 border rounded-lg border-gray-100'>
          <div> <img className=' w-[350px]  rounded-xl ' src="https://images.dubizzle.com.lb/thumbnails/8526934-800x600.webp" alt="" /></div>
          {/* <div> <img className=' top-0 left-0 bottom-0   rounded-xl ' src="https://images.dubizzle.com.lb/thumbnails/8526934-800x600.webp" alt="" /></div> */}

          <div>
            
            <p className=' mt-1'>
              <span className=' font-semibold text-xl leading-[80%]'> AED </span>
                <span className=' font-semibold text-2xl  leading-[80%]'>55,000 </span> 
              <span className=' text-gray-700 '> Yearly </span>
            </p>


            <div className='  mt-3 flex gap-4'>
            <div className=' flex items-center gap-2'>
                <BiBed style={{fontSize:"18px"}}/>
                <span>Studio</span>
              </div>

              <div className=' flex items-center gap-2'>
                <TbRulerMeasure style={{fontSize:"18px"}}/>
                <span>sqft</span>
              </div>
            </div>
            {/*  */}
            <p className='  mt-3'>HIGH FLOOR | CLOSE TO METRO | NICE VIEW</p>

            <p className='  inline-block mt-3' > <span className=' translate-y-[2px] inline-block'><GrLocation style={{fontSize:"18px" }}/></span>   Saba Tower 2, JLT Cluster Q, Jum...</p>
              
              <div className='mt-8 flex gap-4 items-center'>

              

                <div className=' rounded-md bg-[#242424] py-1 px-3 border cursor-pointer  border-gray-300 flex gap-2 items-center'>
                  <div><MdOutlineMail style={{color:"white",fontSize:"23px"}}/></div>
                  <div className='text-white'>Email</div>
                </div>

                <div className=' rounded-md bg-[#242424] py-1 px-3 border cursor-pointer  border-gray-300 flex gap-2 items-center'>
                  <div><MdOutlineCall style={{color:"white",fontSize:"20px"}}/></div>
                  <div className='text-white'>Call</div>
                </div>

                <div className=' rounded-md bg-[#242424] py-1 px-3 border cursor-pointer   border-gray-300 flex gap-2 items-center'>
                  <div><BsWhatsapp style={{color:"white",fontSize:"18px"}}/></div>
                  <div className='text-white'>WhatsApp</div>
                </div>

              </div>

            
          
          </div>



          <div className='  top-0 right-2'><span className='text-white px-2 py-1 rounded-md font-medium text-sm  bg-[#242424]' >FEATURED</span></div>

        </div>
        {/*  */}

      </div>
    </div>
  )
}

export default MainSection
