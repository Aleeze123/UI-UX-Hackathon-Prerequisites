import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
const About = () => {
  return (
    <div className="px-4">
      <div className='flex flex-col lg:flex-row items-center justify-between relative lg:px-0'>
        <div className='w-full lg:w-1/2 text-left flex flex-col justify-center lg:pr-[40px] lg:ml-[40px] mt-8 lg:mt-[-40px]'>
          <h2 className='text-[36px] lg:text-[54px] font-semibold leading-[44px] lg:leading-[64px] tracking-[4%] lg:tracking-[6%]' >
            Our Story
          </h2>
          <p className='text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[26px] mb-[16px]' >
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className='text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[26px]' >
            Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer goods.
          </p>
        </div>
        <div className='w-full lg:w-[705px] lg:h-[609px] mt-[20px] lg:mt-0'>
          <Image
            src='/About.png' 
            alt='About Us Image'
            width={705}
            height={609}
            className='object-cover rounded-[4px_0px_0px_4px]'
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className='w-full sm:w-[270px] h-[230px] rounded-[4px] border border-gray-300 p-6 flex flex-col items-center'>
          <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex justify-center items-center mb-4">
          <div className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center">
        <Image
          src='/Icon/about1.svg' 
          alt='Image 1'
          width={50} 
          height={50} 
          className="object-contain w-[40px] h-[40px]"
        />
      </div>
      <h2 className='text-[32px] text-center text-black font-semibold mb-2'>
        10.5k
      </h2>
      <p className='text-[16px] text-center text-gray-700'>
        Sellers active on our site
      </p>
    </div></div>
        <div className='w-full sm:w-[270px] h-[230px] rounded-[4px] bg-[#DB4444] border border-gray-300 p-6 flex flex-col items-center'>
          <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex justify-center items-center mb-4">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
              <Image 
                src='/Icon/about2.svg' 
                alt='Image 2'
                width={50} 
                height={50} 
                className="object-contain w-[40px] h-[40px]"
              />
            </div>
          </div>
          <h2 className='text-[32px] text-center text-black font-semibold mb-2'>
            33k
          </h2>
          <p className='text-[16px] text-center text-gray-700'>
            Monthly Product Sale
          </p>
        </div>
        <div className='w-full sm:w-[270px] h-[230px] rounded-[4px] border border-gray-300 p-6 flex flex-col items-center'>
          <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex justify-center items-center mb-4">
            <div className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center">
              <Image 
                src='/Icon/about3.svg' 
                alt='Image 3'
                width={50} 
                height={50} 
                className="object-contain w-[40px] h-[40px]"
              />
            </div>
          </div>
          <h2 className='text-[32px] text-center text-black font-semibold mb-2'>
            45.5k
          </h2>
          <p className='text-[16px] text-center text-gray-700'>
            Customers active on our site
          </p>
        </div>
        <div className='w-full sm:w-[270px] h-[230px] rounded-[4px] border border-gray-300 p-6 flex flex-col items-center'>
          <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex justify-center items-center mb-4">
            <div className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center">
              <Image
                src='/Icon/about4.svg' 
                alt='Image 4'
                width={50} 
                height={50} 
                className="object-contain w-[40px] h-[40px]"
              />
            </div>
          </div>
          <h2 className='text-[32px] text-center text-black font-semibold mb-2'>
            25k
          </h2>
          <p className='text-[16px] text-center text-gray-700'>
            Annual gross sale on our site
          </p>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <div className='flex flex-col items-center'>
          <div className='bg-[#F5F5F5] w-[370px] h-[430px]'>
            <Image
              src='/person1.png'
              alt='person1'
              width={236}
              height={391}
              className="rounded-[4px]"
            />
          </div>
          <h2 className='text-[32px] mt-4'>Emma Watson</h2>
          <p className='text-[16px]'>Managing Director</p>
          <div className="flex space-x-4 mt-4">
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#F5F5F5] w-[370px] h-[430px]'>
            <Image
              src='/person2.png'
              alt='person2'
              width={294}
              height={397}
              className="rounded-[4px]"
            />
          </div>
          <h2 className='text-[32px] mt-4'>John Doe</h2>
          <p className='text-[16px]'>Marketing Manager</p>
          <div className="flex space-x-4 mt-4">
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#F5F5F5] w-[370px] h-[430px]'>
            <Image
              src='/person3.png'
              alt='person3'
              width={392}
  height={150}  
  className="rounded-[4px] w-[320px] h-[392px]"  
/>   
          </div>
          <h2 className='text-[32px] mt-4'>Will Smith</h2>
          <p className='text-[16px]'>Product Designer</p>
          <div className="flex space-x-4 mt-4">
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-8">
        <Image
          src='/Icon/icons.svg'
          alt='dots'
          width={112}
          height={16}
          className="w-[112px] h-[16px]"
        />
      </div>
<div className="flex flex-wrap justify-center gap-6 mt-8">
  <div className='w-full sm:w-[270px] h-[230px] rounded-[4px] p-6 flex flex-col items-center mb-6'>
    <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex justify-center items-center mb-4">
      <div className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center">
        <Image
          src='/Icon/about5.svg' 
          alt='Image 5'
          width={50} 
          height={50} 
          className="object-contain "
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
          width={50} 
          height={50} 
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
          width={50} 
          height={50} 
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
  );
}

export default About;
