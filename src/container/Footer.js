import React from 'react'
import {RiCopyrightLine} from 'react-icons/ri'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FaUtensils} from 'react-icons/fa'

function Footer() {
  return (
    <div>
        {/* <div className="w-full bg-amber-100 pt-20 text-stone-600 px-[200px]">
        <div className="h-[20vh]">
        <div className="flex flex-row">
        <h2 className="px-16 py-20 text-2xl font-bold text-stone-700 flex text-center">FooDIe<FaUtensils /></h2>
                
                <div className="">
                    <div className="px-20 py-20">
                        <p className="mb-0 flex"><RiCopyrightLine className=''/> Foodie.in - All rights reserved</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="terms-policy-wrap text-lg-right text-md-right text-left">
                        <ul className="flex flex-row px-20 py-20">
                          <li className="px-2"><a class="small-text" >Designed and developed in Singapore.</a></li>

                            <li className="px-2"><a class="small-text" href="https://zippy.sg/docs/termsandconditions">Terms</a></li>

                            <li className="px-2"><a class="small-text" href="https://zippy.sg/docs/privacy">Privacy Policy</a></li>

                            <li className="pl-32"><a class="small-text" href="https://zippy.sg/docs/privacy"><FiFacebook size={30}/></a></li>
                            <li className="px-5"><a class="small-text" href="https://zippy.sg/docs/privacy"><FiInstagram size={30}/></a></li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

<footer className="text-gray-600 body-font bg-amber-100">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    
      <span className="ml-3 text-xl">FooDIe</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 FooDIe —
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@snahhhh</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      {/* <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a> */}
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      {/* <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a> */}
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer;