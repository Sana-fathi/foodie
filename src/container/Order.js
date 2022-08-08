import React from 'react'
import {VscPerson} from 'react-icons/vsc'
import {TiShoppingCart} from 'react-icons/ti'
import {MdDeliveryDining} from 'react-icons/md'

function Order() {
  return (
    <>
        <section className='bg-amber-400 h-[85vh] p-32'>
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
        </section>
    </>
  )
}

export default Order