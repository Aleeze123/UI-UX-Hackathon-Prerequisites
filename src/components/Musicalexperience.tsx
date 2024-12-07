import React from 'react'
import Image from 'next/image'

const Musicexperience = () => {
  return (
    <div className="bg-black w-full h-auto flex items-center justify-center px-6 py-8">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center w-full max-w-[1170px] mx-auto">
        <div className="text-[#00FF66] space-y-6 sm:space-y-4 md:space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start lg:w-1/2">
          <div className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
            <p>Categories</p>
          </div>
          <div className="text-center sm:text-left lg:text-left">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-white">Enhance Your</h2>
            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-semibold text-white">Musical Experience</h3>
          </div>
          <div className="flex space-x-4 sm:space-x-4 md:space-x-6 mt-4 sm:mt-6 md:mt-8 justify-center lg:justify-start">
            <div className="relative w-[50px] sm:w-[60px] md:w-[62px] h-[50px] sm:h-[60px] md:h-[62px] rounded-full bg-white border-2 border-[#00FF66] flex items-center justify-center">
              <Image
                src="/day.svg"
                alt="Day"
                width={40}
                height={40}
              />
            </div>
            <div className="relative w-[50px] sm:w-[60px] md:w-[62px] h-[50px] sm:h-[60px] md:h-[62px] rounded-full bg-white border-2 border-[#00FF66] flex items-center justify-center">
              <Image
                src="/hour.svg"
                alt="Hours"
                width={40}
                height={40}
              />
            </div>
            <div className="relative w-[50px] sm:w-[60px] md:w-[62px] h-[50px] sm:h-[60px] md:h-[62px] rounded-full bg-white border-2 border-[#00FF66] flex items-center justify-center">
              <Image
                src="/minutes.svg"
                alt="Minutes"
                width={40}
                height={40}
              />
            </div>
            <div className="relative w-[50px] sm:w-[60px] md:w-[62px] h-[50px] sm:h-[60px] md:h-[62px] rounded-full bg-white border-2 border-[#00FF66] flex items-center justify-center">
              <Image
                src="/seconds.svg"
                alt="Seconds"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="mt-6 sm:mt-4 md:mt-6">
            <button className="bg-[#00FF66] w-[171px] sm:w-[200px] md:w-[250px] h-[56px] sm:h-[60px] text-white text-lg font-semibold">
              Buy Now
            </button>
          </div>
        </div>
        <div className="relative w-full sm:w-full md:w-[60%] lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px] mt-6 lg:mt-0">
          <Image
            src="/music.png"
            alt="Music experience"
            width={700}
            height={400}
            className="absolute top-0 right-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Musicexperience