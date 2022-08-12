import React from "react";
import {RiMotorbikeFill} from 'react-icons/ri'
import {IoFastFoodOutline} from 'react-icons/io5'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {MdOutlineDateRange} from 'react-icons/md'

function Cards() {
  return (
    <div>
      {/* <section className="text-gray-700 body-font bg-amber-100 h-[75vh] px-52 m-0">
      
       <div class="container pt-2 text-center">
        <div className="pt-32">
          <h2 className="font-semibold text-5xl text-stone-600">
            Order food delivery you’ll love
          </h2>
          <p className="font-light px-2 mt-2 text-stone-500 font-nunito ">
            Pickup or delivery from restaurants island wide. Satisfy any craving
            with delivery from popular restaurants
          </p>
        </div>

          <div className="flex flex-wrap -m-4 text-center mt-10 px-4 ">
            <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full w-1/4">
              <div className="bg-gradient-to-t from-gray-100 to-slate-200 border shadow-lg px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 hover:bg-amber-700 hover:text-stone-700">
                <RiMotorbikeFill size={30} className=''/>
                <h2 className=" font-nunito text-2xl text-gray-700">
                  Doorstep Delivery
                </h2>
                <p className=" font-light leading-relaxed px-5 py-5">Zippy satisfies your cravings and connects you with possibilities — more time and energy for yourself and those you love.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
              <div className="bg-gradient-to-t from-gray-100 to-slate-200 items-center border-2 shadow-lg px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 hover:bg-amber-700 hover:text-stone-700">
               <IoFastFoodOutline size={30} />
                <h2 className="title-font font-nunito text-3xl text-gray-700">
                Pick-up
                </h2>
                <p className=" font-light leading-relaxed px-5 py-5">Skip the queue and order from your favourite restaurnats for self pick-up and enjoy discounts & save on delivery costs.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 2xl:justify-center w-full">
              <div className="bg-gradient-to-t from-gray-100 to-slate-200 items-center border-2 shadow-lg px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 hover:bg-amber-700 hover:text-stone-700">
                <IoMdNotificationsOutline size={30}/>
                <h2 className="title-font font-nunito text-3xl text-gray-700">
                Real-time Tracking</h2>
                <p className="font-light leading-relaxed px-5 py-5">You will be instantly notified at different stages of your order processing and you can track the progress in real-time.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
              <div className="bg-gradient-to-t from-gray-100 to-slate-200 items-center border-2 shadow-lg px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 hover:bg-amber-700 hover:text-stone-700">
               <MdOutlineDateRange size={30}/>
                <h2 className="title-font font-nunito text-3xl text-gray-700">
                Reservations
                </h2>
                <p className="font-light leading-relaxed px-5 py-8">Hassle free Dine-in at your favourite restaurant by making reservations using our in-app reservation system.</p>
              </div>
            </div>
          </div>
        </div>
       
      </section> */}

<section className="text-gray-600 body-font  bg-amber-100 ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 md:text-4xl md:pt-32"> Order food delivery you’ll love</h1>
        <div clasNames="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="w-full leading-relaxed text-gray-500"> Pickup or delivery from restaurants island wide. Satisfy any craving
            with delivery from popular restaurants.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg bg-gradient-to-t from-gray-100 to-slate-100 shadow-xl ">
          
          <h3 className="tracking-widest text-amber-600 text-xs font-medium title-font"><RiMotorbikeFill size={30} className=''/></h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Doorstep Delivery</h2>
          <p className="leading-relaxed text-base">Zippy satisfies your cravings and connects you with possibilities — more time and energy for yourself and those you love.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg bg-gradient-to-t from-gray-100 to-slate-100 shadow-xl">
         
          <h3 className="tracking-widest text-amber-600 text-xs font-medium title-font"><IoFastFoodOutline size={30} /></h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Pick-up</h2>
          <p className="leading-relaxed text-base">Skip the queue and order from your favourite restaurnats for self pick-up and enjoy discounts & save on delivery costs.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg bg-gradient-to-t from-gray-100  to-slate-100 shadow-xl">
          
          <h3 className="tracking-widest text-amber-600 text-xs font-medium title-font"> <IoMdNotificationsOutline size={30}/></h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Real-time Tracking</h2>
          <p className="leading-relaxed text-base">You will be instantly notified at different stages of your order processing and you can track the progress in real-time.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg bg-gradient-to-t from-gray-100 to-slate-100 shadow-xl">
          
          <h3 className="tracking-widest text-amber-600 text-xs font-medium title-font"><MdOutlineDateRange size={30}/></h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4"> Reservations</h2>
          <p className="leading-relaxed text-base">Hassle free Dine-in at your favourite restaurant by making reservations using our in-app reservation system.</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default Cards;