import React from 'react';
import { Smartphone, Monitor, Camera, Watch, Headphones, Gamepad, ArrowLeft, ArrowRight } from 'lucide-react';

const Category = () => {
  return (
    <div className="ml-4 mt-6 relative">
      <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]">
        <p className="text-[#DB4444] ml-8">Categories</p>
      </div>
      <h2 className="font-semibold text-left text-3xl leading-[48px] tracking-[0.04em] mt-4">Browse By Category</h2>
      <div className="mt-6 flex overflow-x-auto space-x-4 md:space-x-6">
        <div className="w-[170px] h-[145px] rounded-[4px] border-[1px] bg-gray-100 flex flex-col items-center p-4 transition-all duration-300 hover:bg-[#DB4444]">
          <Smartphone size={40} />
          <p className="text-[16px] mt-2">Phones</p>
        </div>

        <div className="w-[170px] h-[145px] rounded-[4px] border-[1px] bg-gray-100 flex flex-col items-center p-4 transition-all duration-300 hover:bg-[#DB4444]">
          <Monitor size={40} />
          <p className="text-[16px] mt-2">Computers</p>
        </div>

        <div className="w-[170px] h-[145px] rounded-[4px] border-[1px] bg-gray-100 flex flex-col items-center p-4 transition-all duration-300 hover:bg-[#DB4444]">
          <Watch size={40} />
          <p className="text-[16px] mt-2">Smart Watch</p>
        </div>

        <div className="w-[170px] h-[145px] rounded-[4px] border-[1px] bg-gray-100 flex flex-col items-center p-4 transition-all duration-300 hover:bg-[#DB4444]">
          <Camera size={40} />
          <p className="text-[16px] mt-2">Camera</p>
        </div>

        <div className="w-[170px] h-[145px] rounded-[4px] border-[1px] bg-gray-100 flex flex-col items-center p-4 transition-all duration-300 hover:bg-[#DB4444]">
          <Headphones size={40} />
          <p className="text-[16px] mt-2">Headphones</p>
        </div>

        <div className="w-[170px] h-[145px] rounded-[4px] border-[1px] bg-gray-100 flex flex-col items-center p-4 transition-all duration-300 hover:bg-[#DB4444]">
          <Gamepad size={40} />
          <p className="text-[16px] mt-2">Gamepad</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-4 flex flex-row space-x-4">
        <div className="bg-gray-200 w-[46px] h-[46px] rounded-full flex items-center justify-center">
          <ArrowLeft size={24} className="cursor-pointer" />
        </div>
        <div className="bg-gray-200 w-[46px] h-[46px] rounded-full flex items-center justify-center">
          <ArrowRight size={24} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Category