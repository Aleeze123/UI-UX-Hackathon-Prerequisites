import React from 'react';
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[340px] mb-6 lg:mb-0 lg:w-[340px]">
        <div className="flex items-start gap-4 mb-4">
          <Phone className="bg-[#DB4444] w-[40px] h-[40px] rounded-full text-white p-2" />
          <div>
            <h2 className="text-[18px] font-medium mb-2">Call To Us</h2>
            <p className="text-[14px] leading-5 mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-[14px] leading-5">Phone: +8801611112222</p>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 mb-4" />
        <div className="flex items-start gap-4">
          <Mail className="bg-[#DB4444] w-[40px] h-[40px] rounded-full text-white p-2" />
          <div>
            <h2 className="text-[18px] font-medium mb-2">Write To Us</h2>
            <p className="text-[14px] leading-5 mb-2">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-[14px] leading-5">Emails: customer@exclusive.com</p>
            <p className="text-[14px] leading-5">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full lg:w-[800px] min-h-[600px]">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="w-full sm:w-1/3">
                <div className="bg-gray-300 w-full h-[40px] rounded-[4px] mb-2 flex items-center">
                  <span className="text-gray-400">
                    Your Name <span className="text-red-500">*</span>
                  </span>
                </div>
             
              </div>
              <div className="w-full sm:w-1/3">
                <div className="bg-gray-300 w-full h-[40px] rounded-[4px] mb-2 flex items-center">
                  <span className="text-gray-400 text-center">
                    Your Email <span className="text-red-500">*</span>
                  </span>
                </div>
            
              </div>
              <div className="w-full sm:w-1/3">
                <div className="bg-gray-300 w-full h-[40px] rounded-[4px] mb-2 flex items-center">
                  <span className="text-gray-400">
                    Your Phone <span className="text-red-500">*</span>
                  </span>
                </div>
               
              </div>
            </div>
            <div>
              <div className="bg-gray-300 w-full h-[207px] rounded-[4px] mb-2 flex items-center">
                <span className="text-gray-400">
                  Your Message <span className="text-red-500">*</span>
                </span>
              </div>
            
            </div>
            <div className="flex justify-end mt-6">
              <button className="bg-[#DB4444] w-[215px] h-[56px] text-white p-2 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
