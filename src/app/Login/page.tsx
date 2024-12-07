import React from 'react';
import Image from 'next/image';
const Login = () => {
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
          <h2 className="text-[28px] md:text-[36px] font-medium mb-4">Log in to Exclusive</h2>
          <p className="text-[14px] md:text-[16px] mb-4">Enter your details below</p>
          
          <form>
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
            <div className="flex flex-col md:flex-row items-center mt-4">
              <button
                type="submit"
                className="w-full md:w-[143px] h-[56px] bg-[#DB4444] text-white p-3 rounded-md mb-4 md:mb-0"
              >
                Log In
              </button>
              
              <p className="text-[16px] text-red-500 mt-2 md:mt-0 md:ml-4 text-center md:text-left">
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;