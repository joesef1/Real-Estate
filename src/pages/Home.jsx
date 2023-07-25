import React from 'react'
import MainSection from '../components/MainSection'
import FilterSection from '../components/FilterSection'

const Home = () => {
  return (
    <div>
    
    {/* <div className="mx-auto  lg:w-[1250px] w-[90%] px-2 sm:px-6 lg:px-8  flex gap-2 mt-10">   */}
    <div className="mx-auto xl:w-[96%] lg:w-[96%] px-2 sm:px-6 lg:px-8  flex gap-2 mt-10">  
      < FilterSection/>
      < MainSection/>
    </div>
    

    </div>
  )
}

export default Home
