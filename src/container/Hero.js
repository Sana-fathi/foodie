import React from 'react'
import { MdShareLocation } from 'react-icons/md';
import Features from './Features';



function Hero() {
  return (
    <>
    
      <div className=' w-full h-[100vh] bg-gradient-to-t  from-amber-400 to-amber-100 ' >
       <img src='https://www.kindpng.com/picc/m/69-694225_plate-food-png-free-transparent-png.png'
          className='p-8  rounded-full w-[30vw]' />
         {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='w-[50vw] '>
  <path fill="#FFA000" d="M29.4,-53.3C34.3,-42.6,31.9,-28,36.7,-17C41.4,-5.9,53.3,1.7,58.3,12.6C63.2,23.4,61.3,37.4,52.4,42.4C43.5,47.5,27.5,43.5,16,40.5C4.4,37.6,-2.8,35.8,-15.6,38.7C-28.5,41.6,-47,49.2,-52.7,44.6C-58.3,40,-51.1,23.1,-53.5,7.6C-55.8,-7.9,-67.6,-22.1,-61.7,-25.3C-55.8,-28.6,-32.1,-20.9,-18.9,-27.8C-5.6,-34.7,-2.8,-56.2,4.7,-63.6C12.2,-70.9,24.5,-64,29.4,-53.3Z" transform="translate(100 100)" />
</svg> */}


        <div className='w-[60vw] text-center pl-20 h-96 rounded-2xl -mt-96 bg-gradient-to-t from-gray-100 to-slate-200 shadow-2xl'>
          <h1 className='text-stone-800 text-4xl font-bold w-[40vw] px-32 text-start ml-96 p-6'>Best Way to Order Your Favourite Food!</h1>
          <p className='text-stone-600 font-bold  px-32 -mt-12 w-[40vw] text-start ml-96 p-8'>Your favourite restaurants at your fingertips. Satisfy your
            cravings with our Island wide delivery. Go ahead, download Zippy
            SG app for convenient ordering & tracking.</p>

            <div className="ml-96 px-32 flex flex-row items-center border-0  text-neutral-50 focus-within:text-neutral-200 top-10">
            <MdShareLocation className="w-5 h-5 absolute ml-3 hover:animate-ping fill-black" />
            <input className="bg-amber-100 w-1/3 border-0 py-2 pr-3 pl-10 sm:w-52 sm:h-10 rounded shadow-inner text-stone-800"
              type="text"
              name="search"
              placeholder="Enter postal code"
            />
            <button className="rounded text-black font-bold bg-amber-400 hover:bg-black hover:text-white px-6 py-2 ml-5">Delivery</button>
            <button className="rounded text-black font-bold bg-amber-400 hover:bg-black hover:text-white w-[32vw] py-2 ml-5">Pick Up</button>
          </div>

        </div>
        
<Features />
<img src='../assets/pizza.png' className='ml-[1260px] mt-[-200px]'/>


      </div>
    </>
  )
}

export default Hero;