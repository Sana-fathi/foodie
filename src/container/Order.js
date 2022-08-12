import React from 'react'
import {VscPerson} from 'react-icons/vsc'
import {TiShoppingCart} from 'react-icons/ti'
import {MdDeliveryDining} from 'react-icons/md'

function Order() {
  return (
    <>
        {/* <section className='bg-amber-400 h-[85vh] p-32'>
<div className='bg-amber-400 shadow-xl rounded-xl -mt-20'>
    <div className='p-8'>
        <div className=' text-center py-4'>
            <h1 className='text-4xl font-bold text-stone-700 '>Order Process</h1>
            <p className='mt-5 text-stone-500'>Our simple & intutive user interface make it easy and convenient to place an order</p>
        </div>
    </div>
    <div className='flex'>
       <div className=''>
        <div className='p-10 w-[30vw]'>
            <h4 className='flex font-semibold text-2xl text-stone-600 '><VscPerson className='bg-gradient-to-t from-gray-100 to-slate-200 shadow-xl w-20 h-20 rounded-full -mt-5 m-5'/>Register for an account</h4>
            <p className='font-base ml-32 font-light text-stone-500 -mt-10'>Download Zippy SG app and register for an account using your mobile number.</p>
        </div>
        <div className='p-10 w-[50vw] pl-52'>
            <h4 className='flex font-semibold text-2xl text-stone-600'><TiShoppingCart className='bg-gradient-to-t from-gray-100 to-slate-200 shadow-xl w-20 p-2 h-20 rounded-full -mt-5 m-5'/>Add to Cart & Checkout</h4>
            <p className='font-base ml-32 font-light text-stone-500 -mt-10'>Browse through our restaurant list and add item from your favourite restaurant to your cart and checkout. We will work with the restaurant to process the order.</p>
        </div>
        <div className='p-10 w-[30vw]'>
            <h4 className='flex font-semibold text-2xl text-stone-600'><MdDeliveryDining className='bg-gradient-to-t from-gray-100 to-slate-200 shadow-xl w-20 p-2 h-20 rounded-full -mt-5 m-5'/>Delivery</h4>
            <p className='font-base ml-32 font-light text-stone-500 -mt-10'>As soon as the food is ready, our delivery partner will quickly collect and deliver to your doorstep.</p>
        </div>
        </div> 
       <div className='w-[50vw] h-96'>
       <img src='../assets/road.png'/>
        <img src='../assets/loc.png' className='w-32 h-32 -mt-96 ml-20 animate-bounce'/>
        <img src='../assets/redloc.png' className='w-12 h-12 -mt-52 ml-80 animate-bounce'/>
       </div>
    </div>
</div>
        </section> */}

<section class="text-gray-600 body-font bg-amber-400">
  <div class="container px-5 py-24 mx-auto">
  <div className=' text-center py-4 xl:mb-20'>
            <h1 className='text-4xl font-bold text-stone-700 '>Order Process</h1>
            <p className='mt-5 text-stone-500'>Our simple & intutive user interface make it easy and convenient to place an order</p>
        </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Register for an account</h2>
        <p class="leading-relaxed text-base">Download Zippy SG app and register for an account using your mobile number.</p>
        {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Add to Cart & Checkout</h2>
        <p class="leading-relaxed text-base">Browse through our restaurant list and add item from your favourite restaurant to your cart and checkout. We will work with the restaurant to process the order.</p>
        {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Delivery</h2>
        <p class="leading-relaxed text-base">As soon as the food is ready, our delivery partner will quickly collect and deliver to your doorstep.</p>
        {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
        
      </div>
    </div>
    <div className=''>

   
    {/* <img src='../assets/road.png' className=''/>
    <img src='../assets/redloc.png' className='md:w-32 md:-mt-52 md:ml-72 animate-bounce'/>
    <img src='../assets/loc.png' className='md'/> */}
        
       </div>
  </div>
</section>

    </>
  )
}

export default Order