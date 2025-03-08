import React from 'react';
import Help from '../../components/Help/Help';
import Customers from '../../components/Customers/Customers';
import CEO from '../../components/CEO/CEO';
import { useNavigate } from 'react-router-dom';


const Services = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (window.location.pathname === "/services") {
          // If already on home, animate scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // Navigate to home if not on home page
          navigate("/");
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100); // Ensures scroll happens after navigation
        }
      };
    return (
        <div>
            <Help></Help>
            <Customers></Customers>
            <CEO></CEO>
            <div className='bg-[#eff2ff] pb-8 md:pb-12 px-8 pt-10 md:pt-0'>
           <div className='mx-auto max-w-5xl flex flex-col gap-10 md:flex-row bg-white rounded p-10 items-center justify-between shadow-lg'>
           <div className='md:w-2/3 text-center md:text-left'>
        <h3 className='text-3xl text-[#6878d6] font-bold mb-5'>Would you like to start a project with us?</h3>
        <p className='text-gray-800'>Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
        1-800-1234-567</p>
            </div>
            <div className=''>
        <button onClick={handleClick} className='rounded py-4 text-white px-10 text-sm bg-[#6878d6] hover:bg-blue-800'>1-800-1234-567</button>
        </div>
           </div>
        </div>
        </div>
    );
};

export default Services;