import React from 'react';
import { MdArrowRight } from 'react-icons/md';

const Cards = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5'>
                <div className='bg-white p-10 shadow-md'>
                    <div className='border-3 w-12 border-[#6878d6] mb-5'></div>
                    <h1 className='text-[#242a56] font-bold text-3xl mb-8'>Who Are We</h1>
                    <p className='text-gray-700'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam.
                    </p>
                </div>
                <div className='bg-white p-10 shadow-md'>
                    <div className='border-3 w-12 border-[#6878d6] mb-5'></div>
                    <h1 className='text-[#242a56] font-bold text-3xl mb-8'>Our Mission</h1>
                    <p className='text-gray-700'>
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
                    </p>
                </div>
                <div className='bg-white p-10 shadow-md'>
                    <div className='border-3 w-12 border-[#6878d6] mb-5'></div>
                    <h1 className='text-[#242a56] font-bold text-3xl mb-8'>What We Do</h1>
                    <ul className='text-gray-700 space-y-2'>
                        <li className="flex items-center gap-2"><MdArrowRight size={25}  className="text-[#6878d6]" /> UI/UX Design</li>
                        <li className="flex items-center gap-2"><MdArrowRight size={25}  className="text-[#6878d6]" /> Website Development</li>
                        <li className="flex items-center gap-2"><MdArrowRight size={25}  className="text-[#6878d6]" /> Marketing</li>
                        <li className="flex items-center gap-2"><MdArrowRight size={25}  className="text-[#6878d6]" /> Social Media</li>
                        <li className="flex items-center gap-2"><MdArrowRight size={25}  className="text-[#6878d6]" /> eCommerce Store</li>
                        <li className="flex items-center gap-2"><MdArrowRight size={25} className="text-[#6878d6]" /> Tech Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
