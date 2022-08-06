import React from "react";
import { TiTick } from "react-icons/ti";

function Benefits() {
  return (
    <div>
      <section id="benefits" className="relative items-center bg-amber-100 h-[75vh] py-10" >
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
                <h2 className="font-bold text-3xl">
                  Exclusive App-Only features, perks and more.
                </h2>

                <ul className="mt-8">
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2">Intutive User Interface</b>- Our user
                    friendly app makes ordering from your favourite restaurants
                    even more easier.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2">Real Time Alert</b>- We will notify you
                    instantly at every stage of your order.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2">Tracking</b>- You can view the delivery
                    rider location from our App.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2">Exclusive Discounts</b>- Download Zippy
                    SG app to enjoy app only perks.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2">Flexible Payment Options</b>- Pay using
                    Visa, Master, Amex, Apple Pay, Android Pay and more. You can
                    save cards for faster checkouts.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2">Highly Secure</b>- Your information is
                    secure with our advanced encryptions and data management.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2">Contactless delivery</b>- Your safety is
                    important to us. Request for contactless delivery from our
                    app under delivery remarks.
                  </li>
                  <li className="flex flex-row">
                    <TiTick />
                    <b className="px-2">Reservations</b>- Quickly and easily
                    make a reservation at our partner restaurants using the in
                    app reservation feature.
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefits;