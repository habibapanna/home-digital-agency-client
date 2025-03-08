// src/components/GetInTouch.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMobile, FaPhoneVolume } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-[#242a56] mb-10'>Get In Touch</h1>
      <h3 className='font-bold text-[#242a56] mb-5'>Read Us</h3>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaMapMarkerAlt className='text-[#6878d6]' size={15} style={{ marginRight: '10px' }} />
          <p className='text-gray-700 mb-5'>
            123/B, Route 66, Downtown, Washington, DC 20004, US
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaEnvelope className='text-[#6878d6]' size={15} style={{ marginRight: '10px' }} />
          <p className='text-gray-700 mb-5'>info@example.com</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaPhoneVolume className='text-[#6878d6]' size={15} style={{ marginRight: '10px' }} />
          <p className='text-gray-700 mb-5'>+001 987-654-3210</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaMobile className='text-[#6878d6]' size={15} style={{ marginRight: '10px' }} />
          <p className='text-gray-700'>+001 987-654-3210</p>
        </div>
        <div>
          <p className='text-[#242a56] font-bold mt-15 mb-5'>Call us Toll Free</p>
          <p className='text-[#6878d6] text-2xl font-bold'> 1-800-1234-567</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
