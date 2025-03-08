import React from 'react';
import Start from '../../components/Start/Start';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import ContactForm from '../../components/ContactForm/ContactForm';
import LocationMap from '../../components/LocationMap/LocationMap';

const Contact = () => {
    const handleClick = () => {
        if (window.location.pathname === "/contact") {
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
        <div className='bg-[#eff2ff] pt-16 md:pt-28 px-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
            <ContactForm></ContactForm>
            </div>
            <div>
            <LocationMap></LocationMap>
            </div>
            <div>
            <GetInTouch></GetInTouch>
            </div>
            </div>
            <div className='bg-[#eff2ff] pt-12 pb-8 md:pb-12'>
           <div className='mx-auto max-w-5xl flex flex-col gap-10 md:flex-row bg-white rounded p-10 items-center justify-between shadow-lg'>
           <div className='md:w-2/3 text-center md:text-left'>
        <h3 className='text-2xl md:text-3xl text-[#6878d6] font-bold mb-5'>Would you like to start a project with us?</h3>
        <p className='text-gray-800 text-sm md:text-[17px]'>Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
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

export default Contact;