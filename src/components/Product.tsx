"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { HeartIcon, EyeIcon } from 'lucide-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Product = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const productContainerRef = useRef<HTMLDivElement | null>(null);

  const products = [
    {
      id: 'one',
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: '160',
      discount: '40',
      image: '/product-one.png',
      rating: 88,
    },
    {
      id: 'two',
      name: 'AK-900 Wired Keyboard',
      price: '960',
      originalPrice: '1160',
      discount: '35',
      image: '/product-two.png',
      rating: 75,
    },
    {
      id: 'three',
      name: 'IPS LCD Gaming Monitor',
      price: 75,
      originalPrice: 100,
      discount: '30',
      image: '/product-three.png',
      rating: 99,
      description: '',
    },
    {
      id: 'four',
      name: 'S-Series Comfort Chair',
      price: 75,
      originalPrice: 100,
      discount: '25',
      image: '/product-four.png',
      rating: 99,
      description: '',
    },
    {
      id: 'five',
      name: 'Quilted Satin Jacket',
      price: 75,
      originalPrice: 100,
      discount: '25',
      image: '/product-five.png',
      rating: 99,
      description: '',
    },
    {
      id: 'six',
      name: 'ASUS FHD Gaming Laptop',
      price: 75,
      originalPrice: 100,
      discount: '30',
      image: '/product-six.png',
      rating: 99,
      description: '',
    },
    {
      id: 'seven',
      name: 'Gucci duffle bag',
      price: 75,
      originalPrice: 100,
      discount: '30',
      image: '/product-seven.png',
      rating: 99,
      description: '',
    },
    {
      id: 'eight',
      name: 'RGB liquid CPU Cooler',
      price: 75,
      originalPrice: 100,
      discount: '30',
      image: '/product-eight.png',
      rating: 99,
      description: '',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (productContainerRef.current) {
      const container = productContainerRef.current;
      const scrollAmount = 270;
      const newPosition =
        direction === 'left' ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="ml-4 mt-6">
      <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]">
        <p className="text-[#DB4444] ml-8">Today&apos;s</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="font-semibold text-left text-[36px]">Flash Sales</h2>
          <div className="flex space-x-6 ml-9">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((timeUnit, index) => (
              <div key={index} className="text-left">
                <p className="font-medium text-[12px] leading-[18px] font-inter">{timeUnit}</p>
                <h2 className="font-bold text-[32px] leading-[30px] tracking-[0.04em] font-inter">
                  {index === 0 ? '03' : index === 1 ? '23' : index === 2 ? '19' : '56'}
                  <span> :</span>
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <button
            className="p-2 bg-[#F5F5F5] rounded-full"
            onClick={() => scroll('left')}
          >
            <ArrowLeft />
          </button>
          <button
            className="p-2 bg-[#F5F5F5] rounded-full"
            onClick={() => scroll('right')}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div
        className="flex space-x-4 overflow-x-auto px-4"
        ref={productContainerRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 flex-col relative group"
          >
            <div className="relative bg-[#F5F5F5] w-[270px] h-[250px] rounded-[4px]">
              <div className="absolute top-[12px] right-[12px] bg-[#DB4444] w-[55px] h-[26px] p-[4px_12px] rounded-tl-[4px] left-2">
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
              <h2 className="text-[16px]">{product.name}</h2>
              <p className="text-[#DB4444] text-[16px]">
                ${product.price}
                <span className="text-[16px] text-gray-500 ml-2 line-through">
                  ${product.originalPrice}
                </span>
              </p>
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Image
                    key={starIndex}
                    src="/stars.svg"
                    alt={`Product Star ${starIndex + 1}`}
                    className="w-[20px] h-[20px] object-cover rounded-[1.4px]"
                  />
                ))}
                <p className="text-[14px] text-gray-500 font-semibold">({product.rating})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#DB4444] w-[234px] h-[56px] p-[16px_48px] rounded-[4px] text-white">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Product;