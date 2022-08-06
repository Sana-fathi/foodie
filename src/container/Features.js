import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'
import {SiGooglechrome} from 'react-icons/si'

function Features() {
  return (
    <div>
        <div className="pl-[1500px] -mt-96">
    
                    <div className="">
                        <div className="animate-pulse bg-gradient-to-tr from-gray-100 to-slate-200 shadow-2xl rounded-full w-32 py-5 text-center">
                            <div className="px-12">
                               <AiFillApple size={30} className='fill-stone-800 '/>
                            </div>
                            <h5 className='mb-4 font-thin'>App Store</h5>
                            <div className="">
                             <a className="bg-gray-200 shadow hover:bg-amber-400 text-stone-700 font-bold py-2 px-2 rounded-full " href="">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="animate-pulse bg-gradient-to-tr from-gray-100 to-slate-200 shadow-2xl rounded-full w-32 py-5 text-center">
                            <div className="px-12">
                                <FaGooglePlay size={30} className='fill-stone-800'/>
                            </div>
                            <h5 className='mb-4'>Google Play</h5>
                            <div className="">
                                <a className="bg-gray-200 shadow hover:bg-amber-400 text-stone-700 font-bold py-2 px-2 rounded-full" href="" >Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="animate-pulse bg-gradient-to-tr from-gray-100 to-slate-200 shadow-2xl rounded-full w-32 py-5 text-center">
                            <div className="px-12">
                                <SiGooglechrome size={30} className='fill-stone-700'/>
                            </div>
                            <h5 className='mb-4'>Web</h5>
                            <div className="">
                                
                                <a className="bg-gray-200 shadow hover:bg-amber-400 text-stone-700 font-bold py-2 px-2 rounded-full" href="">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
               
    </div>
  )
}

export default Features;