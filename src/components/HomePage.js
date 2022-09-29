import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-400 h-[100vh] flex justify-center items-center gap-x-[5vw]">
      <div onClick={() => navigate('/graphs')} className="show-charts px-[2vw] py-[1vh] border-2 border-black rounded-md bg-purple-400 cursor-pointer">
        <h2 className="font-serif text-white">Show Charts</h2>
      </div>
      <div onClick={() => navigate('/exchangerates')} className="find-exchange-rate px-[2vw] py-[1vh] border-2 border-black rounded-md bg-purple-400 cursor-pointer">
        <h2 className="font-serif text-white">Find Current Exchange Rate</h2>
      </div>
    </div>
  )
}

export default HomePage
