import React from 'react'
import { MdShareLocation } from 'react-icons/md';
import Features from './Features';



function Hero() {
  return (
    <div className=''>
      
      <div className='w-full h-[100vh] bg-gradient-to-t  from-amber-400 to-amber-100'>
       <img src='https://www.kindpng.com/picc/m/69-694225_plate-food-png-free-transparent-png.png'
          className='rounded-full w-[40vw] xl:w-[30vw] relative'/>
         {/* {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='w-[50vw] '>
  <path fill="#FFA000" d="M29.4,-53.3C34.3,-42.6,31.9,-28,36.7,-17C41.4,-5.9,53.3,1.7,58.3,12.6C63.2,23.4,61.3,37.4,52.4,42.4C43.5,47.5,27.5,43.5,16,40.5C4.4,37.6,-2.8,35.8,-15.6,38.7C-28.5,41.6,-47,49.2,-52.7,44.6C-58.3,40,-51.1,23.1,-53.5,7.6C-55.8,-7.9,-67.6,-22.1,-61.7,-25.3C-55.8,-28.6,-32.1,-20.9,-18.9,-27.8C-5.6,-34.7,-2.8,-56.2,4.7,-63.6C12.2,-70.9,24.5,-64,29.4,-53.3Z" transform="translate(100 100)" />
</svg> */}


        <div className='-mt-20 xl:-mt-72 xl:w-[70vw] rounded-xl bg-gradient-to-t from-gray-100 to-slate-200 shadow-2xl h-[50vh]'>
          <h1 className='font-nunito font-base text-xl text-stone-700 pt-24 pl-10 px-20 xl:pl-[600px] xl:text-5xl leading-relaxed'>Best Way to Order Your Favourite Food!</h1>

          <p className='font-light text-stone-500 text-sm pl-10 xl:pl-[600px] xl:px-32 leading-relaxed'>Your favourite restaurants at your fingertips. Satisfy your
            cravings with our Island wide delivery. Go ahead, download Zippy
            SG app for convenient ordering & tracking.</p>

             <div className="flex flex-row p-9  xl:pl-[600px] xl:p-8">
            {/* <MdShareLocation className=" absolute hover:animate-ping fill-black mt-1" /> */}
            <input className="bg-gray-100 border-0  rounded shadow-inner text-stone-800 xl:p-2 xl:px-6"
              type="text"
              name="search"
              placeholder="Enter postal code"
            />
            <button className="mx-1 text-sm px-1 xl:p-2 xl:px-6 rounded leading-relaxed text-black font-light bg-amber-200 hover:bg-black hover:text-white xl:mx-5 ">Delivery</button>
          
          <button className="mx-1 text-sm px-1 xl:p-2 xl:px-6 rounded leading-relaxed text-black font-light  bg-amber-200 hover:bg-black hover:text-white xl:mx-5">Pick Up</button>
          </div>
          {/* <Features /> */}
        </div> 
         
        
<img src='../assets/pizza.png' className='xl:ml-[1260px] xl:mt-[-200px]'/> 


</div>

    </div>



  )
}

export default Hero;

// import React, { useState } from "react";
// function IndexPage() {
//     const [menu, setMenu] = useState(false);
//     return (
//         <>
//             {/* <div className="relative w-full h-full pb-10">
//                 <div className="hidden md:block">
//                     <img className="absolute bg-cover bg-center w-full h-full inset-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Hero%2008.png" alt />
//                 </div>
//                 <nav className="lg:hidden relative z-50">
//                     <div className="flex py-2 justify-between items-center px-4">
//                         <div>
//                             <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg1.svg" alt="logo" />
//                         </div>
//                         <div className="visible flex items-center">
//                             <button id="open" onClick={() => setMenu(!menu)} className={` ${menu ? 'hidden' : ''} focus:outline-none focus:ring-2 focus:ring-black`}>
//                                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg" alt="menu" />
//                             </button>
//                             <ul id="list" className={` ${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}>
//                                 <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
//                                     <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
//                                         <span className="font-bold">Home</span>
//                                     </a>
//                                 </li>
//                                 <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
//                                     <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
//                                         <span className="font-bold">About Us</span>
//                                     </a>
//                                 </li>
//                                 <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
//                                     <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
//                                         <span className="font-bold">Pricing</span>
//                                     </a>
//                                 </li>
//                                 <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
//                                     <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
//                                         <span className="font-bold">Resources</span>
//                                     </a>
//                                 </li>
//                                 <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
//                                     <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
//                                         <span className="font-bold">Sign In</span>
//                                     </a>
//                                 </li>
//                             </ul>
//                             <div className="xl:hidden">
//                                 <button id="close" className={` ${menu ? '' : 'hidden'} close-m-menu focus:ring-2 focus:ring-black focus:outline-none`} onClick={() => setMenu(!menu)}>
//                                     <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg" alt="close" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//                 <nav className="f-f-l relative z-10">
//                     <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
//                         <div>
//                             <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg4.svg" alt="logo" />
//                         </div>
//                         <div className="flex items-center text-white text-base font-medium">
//                             <ul className="flex items-center pr-3 xl:pr-12">
//                                 <li className="cursor-pointer hover:text-gray-300 ease-in">
//                                     <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Home</a>
//                                 </li>
//                                 <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
//                                     <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">About Us</a>
//                                 </li>
//                                 <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
//                                     <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Pricing</a>
//                                 </li>
//                                 <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
//                                     <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Resources</a>
//                                 </li>
//                             </ul>
//                             <button className="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
//                                 Sign In
//                                 <img className="ml-4" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg5.svg" alt="arrow" />
//                             </button>
//                         </div>
//                     </div>
//                 </nav>
//                 <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
//                     <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
//                         <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">Build, review and ship with ease</h1>
//                         <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
//                             <h2>The next big thing starts here. Start building with Prodify and be the first to market with a product that is ready to take on the competition and delight your customers</h2>
//                         </div>
//                         <div className="lg:flex">
//                             <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start building now</button>
//                             <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Try it out</button>
//                         </div>
//                     </div>
//                     <img className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png" alt="sample page" role="img" />
//                     <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start building now</button>
//                     <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Try it out</button>
//                 </div>
//             </div>


//             <style>{`
//         .top-100 {
//             animation: slideDown .5s ease-in-out;
//         }

//         @keyframes slideDown {
//             0% {
//                 top: -50%;
//             }

//             100% {
//                 top: 0;
//             }
//         }

//         * {
//             outline: none !important;
//             -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//             -webkit-tap-highlight-color: transparent;
//         } `}</style>
//         </>
//     );
// }

// export default IndexPage; */}
