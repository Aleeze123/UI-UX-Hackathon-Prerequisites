import React from 'react';
import { HeartIcon, EyeIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
const Explore = () => {
  const products = [
    {
      id: 'one',
      name: 'Breed Dry Dog Food',
      price: 100,
      discount: '40',
      image: '/product1.png',
      rating: 88,
    },
    {
      id: 'two',
      name: 'CANON EOS DSLR Camera',
      price: '360',
      discount: '35',
      image: '/product2.png',
      rating: 75,
    },
    {
      id: 'three',
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      discount: '30',
      image: '/product3.png',
      rating: 99,
    },
    {
      id: 'four',
      name: 'Curology Product Set ',
      price: 500,
      originalPrice: 100,
      discount: '25',
      image: '/product4.png',
      rating: 99,
    },
    {
      id: 'five',
      name: 'Kids Electric Car',
      price: 960,
      discount: '25',
      image: '/product5.png',
      rating: 99,
    },
    {
      id: 'six',
      name: 'Jr. Zoom Soccer Cleats',
      price: 1160,
      discount: '30',
      image: '/product6.png',
      rating: 99,
    },
    {
      id: 'seven',
      name: 'GP11 Shooter USB Gamepad',
      price: 660,
      discount: '50',
      image: '/product7.png',
      rating: 99,
    },
    {
      id: 'eight',
      name: 'Quilted Satin Jacket',
      price: 75,
      discount: '63',
      image: '/product8.png',
      rating: 99,
    },
  ];

  return (
    <div className="ml-4 mt-6">
      <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]">
        <p className="text-[#DB4444] ml-8 whitespace-nowrap">Our Products</p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center flex-col sm:flex-row">
          <h2 className="font-semibold text-left text-[36px] sm:text-[40px]">Explore Our Products</h2>
          <div className="flex space-x-6 ml-9 mt-4 sm:mt-0">
          </div>
        </div>
        <div className="flex space-x-4 items-center mt-4 sm:mt-0">
          <button className="p-2 bg-[#F5F5F5] rounded-full">
            <ArrowLeft />
          </button>
          <button className="p-2 bg-[#F5F5F5] rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 flex-col relative group">
            <div className="relative bg-[#F5F5F5] w-full h-[250px] sm:w-[270px] rounded-[4px]">
              <div className="absolute top-[12px] right-[12px] bg-[#00FF66] w-[55px] h-[26px] p-[4px_12px] rounded-tl-[4px] left-2">
                <span className="text-white text-sm rounded-[4px]">-{product.discount}%</span>
              </div>
              <Image
                src={product.image}
                alt={product.name}
                className="absolute top-[35px] left-[40px] w-[190px] h-[180px] object-cover rounded-[4px]"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full p-2 bg-black rounded-md">
                  Add to Cart
                </button>
              </div>
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div className="text-xl cursor-pointer bg-white h-[34px] w-[34px] flex items-center justify-center rounded-full">
                  <HeartIcon />
                </div>
                <div className="text-xl cursor-pointer bg-white h-[34px] w-[34px] flex items-center justify-center rounded-full">
                  <EyeIcon />
                </div>
              </div>
            </div>
            <div className="relative mt-4">
              <h2 className="text-[16px] sm:text-[18px]">{product.name}</h2>
              <p className="text-[#DB4444] text-[16px] sm:text-[18px]">
                ${product.price}
              </p>
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Image
                    key={starIndex}
                    src="./stars.svg"
                    alt={`Product Star ${starIndex + 1}`} 
                    className="w-[20px] h-[20px] object-cover rounded-[1.4px]"
                  />
                ))}
                <p className="text-[14px] sm:text-[16px] text-gray-500 font-semibold">({product.rating})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <button className="bg-[#DB4444] w-[234px] sm:w-[250px] h-[56px] p-[16px_48px] rounded-[4px] text-white">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Explore;

