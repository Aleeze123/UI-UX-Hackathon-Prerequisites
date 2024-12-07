import React from 'react'
import Image from 'next/image'

const Arrival = () => {
  return (
    <div className="ml-4 mt-6">
      <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]">
        <p className="text-[#DB4444] text-[16px] ml-8">Featured</p>
      </div>
      <h2 className="font-semibold text-left text-3xl leading-[48px] tracking-[0.04em] mt-4">New Arrival</h2>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 mt-6">
        <div className="w-full sm:w-[570px] h-[600px]">
          <Image
            src="/arr1.png"
            alt="PlayStation 5"
            width={570}
            height={600}
            className='w-full h-full rounded-[4px]'
          />
        </div>
        <div className="w-full sm:w-[570px] h-[600px]">
          <Image
            src="/aar2.png"
            alt="Arrival 2"
            width={570}
            height={600}
            className="w-full h-full rounded-[4px]"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
  <div className='w-full sm:w-[270px] h-[230px] rounded-[4px] p-6 flex flex-col items-center mb-6'>
    <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex justify-center items-center mb-4">
      <div className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center">
        <Image
          src='/Icon/about5.svg' 
          alt='Image 5'
          className="object-contain w-[40px] h-[40px]"
        />
      </div>
    </div>
    <h2 className='text-[18px] sm:text-[20px] text-center text-black font-semibold mb-2'>
      FREE AND FAST DELIVERY
    </h2>
    <p className='text-[12px] sm:text-[14px] text-center text-gray-700'>
      Free delivery for all orders over $140
    </p>
  </div>
  <div className='w-full sm:w-[270px] h-[230px] rounded-[4px] p-6 flex flex-col items-center mb-6'>
    <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex justify-center items-center mb-4">
      <div className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center">
        <Image 
          src='/Icon/about6.svg' 
          alt='Image 6'
          className="object-contain w-[40px] h-[40px]"
        />
      </div>
    </div>
    <h2 className='text-[18px] sm:text-[20px] text-center text-black font-semibold mb-2'>
      24/7 CUSTOMER SERVICE
    </h2>
    <p className='text-[14px] text-center text-gray-700'>
      Friendly 24/7 customer support
    </p>
  </div>
  <div className='w-full sm:w-[270px] h-[230px] rounded-[4px] p-6 flex flex-col items-center mb-6'>
    <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex justify-center items-center mb-4">
      <div className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center">
        <Image
          src='/Icon/about7.svg' 
          alt='Image 7'
          className="object-contain w-[40px] h-[40px]"
        />
      </div>
    </div>
    <h2 className='text-[18px] sm:text-[20px] text-center text-black font-semibold mb-2'>
      MONEY BACK GUARANTEE
    </h2>
    <p className='text-[14px] text-center text-gray-700'>
      We return money within 30 days
    </p>
  </div>
</div>
    </div>
  )
}

export default Arrival
