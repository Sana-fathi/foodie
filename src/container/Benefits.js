import React from "react";
import { TiTick } from "react-icons/ti";

function Benefits() {
  return (
    <div>
      {/* <section id="benefits" className="relative items-center bg-amber-100 h-[75vh] py-10" >
        <div className="container px-8 py-20 bg-gradient-to-t from-amber-100 to-amber-200 rounded mx-52 shadow-2xl">
          <div className="flex flex-row">
            <div className="">
              <div class="">
                <img
                  src="https://i.pinimg.com/564x/65/88/ac/6588acd884c48f045170c32611aa5585.jpg"
                  alt="about us"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="m-8">
              <div className="px-4">
                <h2 className="font-semibold text-3xl font-nunito text-stone-600">
                  Exclusive App-Only features, perks and more.
                </h2>

                <ul className="mt-8">
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2 font-nunito text-stone-500">Intutive User Interface</b>- Our user
                    friendly app makes ordering from your favourite restaurants
                    even more easier.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2 font-nunito text-stone-500">Real Time Alert</b>- We will notify you
                    instantly at every stage of your order.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2 font-nunito text-stone-500">Tracking</b>- You can view the delivery
                    rider location from our App.
                  </li>
                  <li className="flex flex-row ">
                    <TiTick />
                    <b className="px-2 font-nunito text-stone-500">Exclusive Discounts</b>- Download Zippy
                    SG app to enjoy app only perks.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2 font-nunito text-stone-500">Flexible Payment Options</b>- Pay using
                    Visa, Master, Amex, Apple Pay, Android Pay and more. You can
                    save cards for faster checkouts.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2 font-nunito text-stone-500">Highly Secure</b>- Your information is
                    secure with our advanced encryptions and data management.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2 font-nunito text-stone-500">Contactless delivery</b>- Your safety is
                    important to us. Request for contactless delivery from our
                    app under delivery remarks.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2 font-nunito text-stone-500">Reservations</b>- Quickly and easily
                    make a reservation at our partner restaurants using the in
                    app reservation feature.
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section> */}

<section className="text-gray-600 body-font  bg-amber-100 ">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Exclusive App-Only features, perks and more.</h1>
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-amber-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Intutive User Interface</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-amber-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Real Time Alert</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-amber-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Tracking</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-amber-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Exclusive Discounts </span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-amber-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Flexible Payment Options</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-amber-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Highly Secure</span>
        </div>
      </div>
    </div>
    
  </div>
</section>

    </div>
  );
}

export default Benefits;