import React, { useState } from "react";
import { motion } from "framer-motion";
import { Minus } from "lucide-react";
import { HiPlus, HiPlusSm } from "react-icons/hi";


const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setIsZoomed(activeIndex !== index);
  };

  const accordionData = [
    "Best Quality Designs",
    "24x7 Live Support",
    "Award Winning Support Team",
    "Best ROI Techniques",
    "Experienced Professionals",
    "Result Oriented Projects",
  ];

  return (
    <section className="py-20 bg-[#eff2ff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Image with Overlay, Same Height as Right Side */}
          <motion.div
            className="relative md:w-1/2 w-full md:h-auto md:ml-[-20px]"
            animate={{ scale: isZoomed ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/why-choose-us.jpg"
              alt="Why Choose Us"
              className="w-full h-[200px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-[#242a56] opacity-50"></div>
          </motion.div>

          {/* Right Side - Accordion */}
          <div className="md:w-1/2 md:max-w-md mx-auto h-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[#242a56]">
              Why Choose Us?
            </h1>
            <p className="text-gray-700 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>

            <div className="space-y-1 bg-white shadow-md">
              {accordionData.map((title, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className=" last:border-none">
                    <div
                      className="flex justify-between items-center px-4 py-3 cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      <span
                        className={`transition-all ${
                          isOpen ? "text-[#6878d6]" : "text-gray-700"
                        }`}
                      >
                        {title}
                      </span>
                      <span
                        className={`flex items-center justify-center rounded-full transition-all ${
                          isOpen ? "bg-[#6878d6] text-white" : "bg-black text-white"
                        }`}
                      >
                        {isOpen ? <Minus size={18} /> : <HiPlusSm size={18} />}
                      </span>
                    </div>
                    {isOpen && (
                      <div className="px-4 pb-3 text-sm text-gray-700">
                        Sed Fringilla Mauris Sit Amet Nibh. Donec Sodales Sagittis
                        Magna. Sed Consequat, Leo Eget Bibendum, Sodales, Augue
                        Velit Cursus Nunc, Quis Gravida Magna Mi A Libero.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
