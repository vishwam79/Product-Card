"use client";

import React, { useState } from "react";
import ProductView from "./detailview";
import { FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define the interface for the props
interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  images: string[];
  rating: number;
  oldprice?: string;

  details: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  images,
  rating,
  oldprice,
  

  details,
}) => {
  const [open, setOpen] = useState(false);

  const openProductDetail = () => {
    setOpen(true); // Open the modal
    document.body.style.overflow = "hidden"; 
  };

  const closeProductDetail = () => {
    setOpen(false); // Close the modal
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <>
      <div onClick={openProductDetail}>
        <div className="w-full max-w-sm min-h-96 max-h-96 border border-gray-700 rounded-lg shadow bg-transparent">
          <a href="#">
            <div className="p-6 rounded-lg">
              <Image className="rounded-lg" src={images[0]} width={500} height={500} alt="product image" />
            </div>
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <div className="flex justify-between items-center">
                <h5 className="text-m font-semibold tracking-tight text-gray-900 dark:text-white">
                  {name}
                </h5>
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 mr-1">
                    {rating}
                  </span>
                  <svg
                    className="w-3 h-3 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              </div>
            </a>
            <div>
              <p className="text-gray-300 text-xs mt-4">{description}</p>
            </div>
            <div className="flex items-center mt-2 mb-3"></div>
            <div className="flex items-center justify-between sm:flex-row">
              <div className="">
                {oldprice && (
                  <span className="text-sm line-through font-normal text-gray-900 dark:text-red-300 mr-2">
                    {oldprice}
                  </span>
                )}
                <span className="text-lg font-semibold text-gray-900 dark:text-yellow-100">
                  {price}
                </span>
              </div>
              <div>
                <button className="hidden md:inline-block text-gray-950 text-sm dark:text-gray-300 border-[1px] border-purple-300 px-2 py-1 rounded-md dark:hover:bg-purple-300 dark:hover:text-gray-900 dark:hover:font-semibold">
                  Add to cart
                </button>

                <FaShoppingCart className="md:hidden cursor-pointer hover:text-yellow-300 text-xl text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {open && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          >
            <div className="relative  dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full  h-full">
              {/* Close Button */}
              <button
                onClick={closeProductDetail}
                className="absolute right-4 dark:text-white top-1 z-50 dark:bg-black rounded-full p-2 hover:bg-red-700"
              >
                ✖
              </button>

              {/* Product Details in Modal */}

              <ProductView
                name={name}
                description={description}
                price={price}
                images={images}
                rating={rating}
                oldprice={oldprice}
                details={details}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default ProductCard;
