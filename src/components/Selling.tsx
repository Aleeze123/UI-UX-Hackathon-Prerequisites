import React from 'react';
import Image from 'next/image';
import { HeartIcon, EyeIcon } from 'lucide-react';

const Selling = () => {
  const products = [
    {
      id: 'one',
      name: 'The north coat',
      price: 100,
      discount: '260',
      image: '/selling1.png',
      rating: 65,
    },
    {
      id: 'two',
      name: 'Gucci duffle bag',
      price: '960',
      discount: '35',
      image: '/selling2.png',
      rating: 65,
    },
    {
      id: 'three',
      name: 'RGB liquid CPU Cooler',
      price: 160,
      discount: '30',
      image: '/selling3.png',
      rating: 65,
    },
    {
      id: 'four',
      name: 'Small BookSelf ',
      price: 360,
      originalPrice: 100,
      discount: '25',
      image: '/selling4.png',
      rating: 65,
    },
  ];

  return (
    <div className="ml-4 mt-6 sm:ml-6 sm:mt-8">
      <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]">
        <p className="text-[#DB4444] ml-8 whitespace-nowrap">This Month</p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center flex-col sm:flex-row sm:space-x-4">
          <h2 className="font-semibold text-left text-[36px] sm:text-[40px] lg:text-[48px]">Best Selling Products</h2>
        </div>
        <div className="flex space-x-4 items-center mt-4 sm:mt-0">
          <button className="bg-[#DB4444] w-[159px] h-[56px] rounded-[4px] text-white">
            View All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 flex-col relative group border rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="relative bg-[#F5F5F5] w-full h-[250px] sm:w-[270px] rounded-[4px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div className="text-xl cursor-pointer bg-white h-[34px] w-[34px] flex items-center justify-center rounded-full shadow-md">
                  <HeartIcon />
                </div>
                <div className="text-xl cursor-pointer bg-white h-[34px] w-[34px] flex items-center justify-center rounded-full shadow-md">
                  <EyeIcon />
                </div>
              </div>
            </div>
            <div className="relative mt-4">
              <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">{product.name}</h2>
              <p className="text-[#DB4444] text-[16px] sm:text-[18px] lg:text-[20px] font-bold">
                ${product.price}
              </p>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, starIndex) => (
                  <Image
                    key={starIndex}
                    src="./stars.svg"
                    alt={`Product Star ${starIndex + 1}`} 
                    className="w-[20px] h-[20px] object-cover"
                  />
                ))}
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-gray-500 font-semibold">({product.rating})</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default Selling;
