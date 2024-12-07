import React from 'react';
import { ChevronDown } from "lucide-react";

const Top = () => {
  return (
    <div className='bg-black h-[32px] w-full'>
      <div className="flex items-center justify-center text-center w-full max-w-screen-xl mx-auto h-full">
        <p className="text-white text-[12px] font-normal"> 
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>

        <p className="text-white text-underline ml-4  text-[12px]">
        <a href="#shop-now" className="underline">
            ShopNow
          </a>
        </p>
        <p className="text-white ml-20 mt-1 flex items-center  text-[12px]">
          <span>English</span>
          <ChevronDown className="ml-1" /> 
        </p>
      </div>
    </div>
  );
}

export default Top;
