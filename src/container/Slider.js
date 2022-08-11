import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredProducts = [
  "../assets/food1.jpg",
  "../assets/food2.jpg",
  "../assets/food3.jpg",
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 2000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (

    <div ref={slideRef} className=" relative bg-stone-200">
      <div className="h-[80vh]">
      <div className=" text-center mb-5">
                            <h2 className="text-2xl sm:text-3xl font-base text-stone-700 py-10">Explore Our Special Menu</h2>
                            <p></p>
                        </div>
                        <div className="">
        <img src={featuredProducts[currentIndex]} alt="" className=" object-cover w-full h-[60vh] rounded shadow-xl"/>
        </div>
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between">
 <button
   className="bg-black text-white p-1 ml-5  rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
   onClick={handleOnPrevClick}
 >
   <AiOutlineVerticalRight size={30} />
 </button>
 <button
   className="bg-black text-white p-1 ml-52 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
   onClick={handleOnNextClick}
 >
   <AiOutlineVerticalLeft size={30} />
 </button>
 </div>
     
     
    </div>
 

  );
}