import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-black p-6 sm:p-8 md:p-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-white text-[24px]'>Exclusive</h2>
          <p className='text-white text-[20px]'>Subscribe</p>
          <p className='text-white text-[16px]'>Get 10% off your first order</p>
          <div className='flex items-center'>
            <input
              placeholder='Enter your email'
              type='email'
              className='bg-black text-white border-b-2 border-white flex-1 py-2 px-4'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-white text-[20px]'>Support</h2>
          <p className='text-white text-[16px]'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className='text-white text-[16px]'>exclusive@gmail.com</p>
          <p className='text-white text-[16px]'>+88015-88888-9999</p>
        </div>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-white text-[20px]'>Account</h2>
          <p className='text-white text-[16px]'>My Account</p>
          <p className='text-white text-[16px]'>Login / Register</p>
          <p className='text-white text-[16px]'>Cart</p>
          <p className='text-white text-[16px]'>Wishlist</p>
          <p className='text-white text-[16px]'>Shop</p>
        </div>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-white text-[20px]'>Quick Link</h2>
          <p className='text-white text-[16px]'>Privacy Policy</p>
          <p className='text-white text-[16px]'>Terms Of Use</p>
          <p className='text-white text-[16px]'>FAQ</p>
          <p className='text-white text-[16px]'>Contact</p>
        </div>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-white text-[20px]'>Download App</h2>
          <p className='text-white text-[12px]'>Save $3 with App New User Only</p>
          <div className='flex items-center'>
            <Image
              src='/barcode.svg'
              alt='Barcode'
              width={80}
              height={80}
            />
            <div className='flex flex-col ml-4 space-y-1'>
              <Image
                src='/googleplay.png'
                alt='Google Play'
                width={104}
                height={34}
              />
              <Image
                src='/appstore.png'
                alt='App Store'
                width={104}
                height={34}
              />
            </div>
          </div>
          <div className='flex justify-center items-center space-x-6 mt-8'>
            <Facebook className='text-white cursor-pointer' size={24} />
            <Twitter className='text-white cursor-pointer' size={24} />
            <Instagram className='text-white cursor-pointer' size={24} />
            <Linkedin className='text-white cursor-pointer' size={24} />
          </div>
        </div>
      </div>
      <hr className='text-[#F9F9F933] mt-8' />
      <p className='text-gray-400 text-center text-[16px] mt-6'>&copy; Copyright Rimel 2022. All rights reserved</p>
    </div>
  )
}

export default Footer
