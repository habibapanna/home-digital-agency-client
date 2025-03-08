import React from "react";
import { FaRegCreditCard, FaRegEdit, FaRegLightbulb, FaRegObjectGroup, FaRegPaperPlane, FaRegUserCircle } from "react-icons/fa";

const services = [
  { icon: <FaRegEdit size={45} className="text-[#6878d6]" />, title: "Design" },
  { icon: <FaRegObjectGroup size={45} className="text-[#6878d6]" />, title: "Development" },
  { icon: <FaRegPaperPlane size={45} className="text-[#6878d6]" />, title: "Marketing" },
  { icon: <FaRegLightbulb size={45} className="text-[#6878d6]" />, title: "Social Media" },
  { icon: <FaRegCreditCard size={45} className="text-[#6878d6]" />, title: "eCommerce" },
  { icon: <FaRegUserCircle size={45} className="text-[#6878d6]" />, title: "Help & Support" },
];

const Help = () => {
  return (
    <div className="bg-[#eff2ff] py-12 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#242a56]">How can we help you?</h1>
        <p className="text-gray-700 mt-5 px-4 md:text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white py-12 px-10   border-gray-200">
            <div className="flex mb-5">{service.icon}</div>
            <h2 className="text-xl md:text-2xl font-bold text-[#242a56] mb-5">{service.title}</h2>
            <p className="text-gray-600 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. 
              Praesent mattis commodo augue.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
