"use client"
import React from "react";
import {motion} from 'framer-motion';



const Header = () => {
  return (

    <div className="relative h-full flex justify-center items-center w-full bg-gray-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">

        </div>

        <motion.div
        
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 10 }} 
        transition={{ duration: 1, ease: "easeIn" }} 
        exit={{ opacity: 0, y: -20 }}

        className="flex justify-center mb-10 mt-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center relative">
          <h2 className=" text-blue-100 max-w-80 uppercase tracking-widest text-xs text-center">
           Product View, Next Js Assignment
          </h2>
          <div
            className="mt-5 text-center text-[20px] font-semibold text-blue-50 md:text-3xl lg:text-5xl "
           
          >Next Js Product Card View with Tailwind css and <span className="text-purple-400">Framer motion</span> </div>
          <p className="text-center mt-3 text-gray-500 md:tracking-widest mb-4 text-sm md:text-sm lg:text-sm text-white-100 ">Hi, I'm Vishwam a MERN Stack / Next js Developer</p>
          <button title="Show My Work" ></button>
        </div>
      </motion.div>
    </div>
    
  );
};

export default Header;

