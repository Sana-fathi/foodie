import React from 'react'
import {RiCopyrightLine} from 'react-icons/ri'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FaUtensils} from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <div className="bg-amber-100 pt-20 text-stone-600 px-[200px]">
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
    </div>
    </div>
  )
}

export default Footer;