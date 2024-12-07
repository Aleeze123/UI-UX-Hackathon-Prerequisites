import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Product from '@/components/Product'
import Category from '@/components/Category'
import Selling from '@/components/Selling'
import Musicexperience from '@/components/Musicalexperience'
import Explore from '@/components/Explore'
import Arrival from '@/components/Arrival'
const Home = () => {
  return (
    <div>
    <div className="relative flex flex-col lg:flex-row items-center justify-between lg:w-[1200px] w-full h-auto mx-auto space-y-4 lg:space-y-0 mt-[50px]">
      <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-6">
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Woman&apos;s Fashion
          <ChevronRight className="ml-2" />
        </div>
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Men&apos;s Fashion
          <ChevronRight className="ml-2" />
        </div>
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Electronics
        </div>
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Home & Lifestyle
        </div>
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Medicine
        </div>
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Sports & Outdoor
        </div>
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Baby&apos;s & Toys
        </div>
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Groceries & Pets
        </div>
        <div className="flex items-center text-[16px] lg:text-[22px] font-normal leading-[24px] lg:leading-[28px]">
          Health & Beauty
        </div>
      </div>
      <div className="hidden lg:block h-[500px] lg:h-[440px] border-r-2 border-gray-400 mx-4" />
      <div className="relative w-full lg:w-[892px] lg:h-[344px] mt-[182px]">
        <Image
          src='/hero.png'
          alt="Banner Image" 
          className="w-full h-full object-cover"
        />
      </div>
    
    </div>
      <Product/>
      <Category/>
      <Selling/>
      <Musicexperience/>
      <Explore/>
      <Arrival/>
    </div>
  );
};

export default Home;
