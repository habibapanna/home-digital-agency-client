import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="px-10">
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, y: 50 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <h2 className="text-xl md:text-2xl font-bold mb-5">
              Fastest And Most Lightweight WP Theme
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold">
              Create Amazing <br />
              Business Websites
            </h1>
            <p className="pt-12 pb-20">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue. Morbi
              fringilla congue libero, ac malesuada vulputate pharetra. Get
              Started
            </p>
            <button className="rounded py-3 text-white px-10 hover:bg-white hover:text-black bg-[#6878d6]">
              GET STARTED
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
