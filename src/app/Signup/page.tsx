import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] p-8 gap-4 rounded-[4px] opacity-100">
        <div className="w-full md:w-1/2 h-auto mb-4 md:mb-0">
          <Image
            src="/beetsnop.png" 
            alt="Signup"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 h-auto bg-white rounded-lg p-8">
          <h2 className="text-[28px] md:text-[36px] font-medium mb-4">Create an account</h2>
          <p className="text-[14px] md:text-[16px] mb-4">Enter your details below</p>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border-b border-gray-400 focus:outline-none  rounded"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full p-3 mb-4 border-b border-gray-400 focus:outline-none rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border-b border-gray-400 focus:outline-none rounded"
            />
            <button type="submit" className="w-full bg-[#DB4444] text-white p-3 rounded-md mt-4">
              Create Account
            </button>
          </form>
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex items-center space-x-2 mt-4">
              <Image
                src="/google.svg" 
                alt="Signup"
                className="w-[24px] h-[24px] object-cover"
              />
              <p className="text-[16px]">Sign up with Google</p>
            </div>
            <p className="text-[16px] mt-4 text-center">
              Already have an account?{' '}
              <Link href="/Login" className="text-black">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;