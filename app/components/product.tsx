"use client";
import { productslist } from "../../data/index.js";
import ProductCard from "./productCard";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const product = () => {
  return (
    <>
      <div
        className={`grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto items-center`}
      >
        {productslist.map((item, index) => (
          <motion.div key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.20, duration: 0.5 }}
          >
            <ProductCard
              
              
              name={item.name}
              description={item.description}
              price={item.price}
              images={item.images}
              rating={item.rating}
              oldprice={item.oldprice}
              details={item.details}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default product;
