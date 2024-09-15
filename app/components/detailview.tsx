import { details } from "framer-motion/client";
import React, { useState } from "react";
import Image from "next/image";

// Props for ProductView
interface ProductViewProps {
  name: string;
  description: string;
  price: string;
  images: string[]; 
  rating: number;
  oldprice?: string;
  details: string;
}

const ProductView: React.FC<ProductViewProps> = ({
  name,
  description,
  price,
  images,
  rating,
  oldprice,
  details,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track the current image index

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="lg:flex md:flex item-center mx-auto border-[1px] border-gray-800  p-10 rounded-md">
      {/* Image Slider */}
      <div className="relative md:w-[60%]  h-full">
        <div className="h-full flex justify-center items-center ">
          <Image
            src={images[currentIndex]}
            alt={name}
            className="md:w-[90%] items-center object-cover rounded-lg"
            width={700} height={700}
          />

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
          >
            ❮
          </button>
          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
          >
            ❯
          </button>
        </div>

        <div className="hidden md:flex mt-5 justify-center items-center gap-3">
          <Image
          width={700} height={700}
            className={
              currentIndex === 0
                ? "border-[1px] border-white p-1 rounded-md w-28"
                : "w-24 rounded-md"
            }
            src={images[0]}
            alt=""
          />

          <Image
          width={700} height={700}
            className={
              currentIndex === 1
                ? "border-[1px] border-white p-1 rounded-md w-28"
                : "w-24 rounded-md"
            }
            src={images[1]}
            alt=""
          />

          <Image
          width={700} height={700}
            className={
              currentIndex === 2
                ? "border-[1px] border-white p-1 rounded-md w-28"
                : "w-24 rounded-md"
            }
            src={images[2]}
            alt=""
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4 md:w-[40%]  items-center ">
        <h2 className="text-2xl text-gray-200 font-semibold">{name}</h2>
        <p className="mt-2 text-gray-400">{details}</p>
        <div className="mt-4 flex justify-between items-center">
          {oldprice && (
            <span className="line-through text-red-500">{oldprice}</span>
          )}
          <span className="text-xl font-bold text-purple-200">{price}</span>
        </div>

        <button className="mt-6 border-purple-300 border text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductView;
