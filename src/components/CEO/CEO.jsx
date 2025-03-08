import React from 'react';

const CEO = () => {
    return (
        <div className='bg-[#eff2ff] p-10'>
           <div className='text-center md:p-20'>
           <h2 className='text-2xl md:text-3xl font-bold text-[#242a56]'>"Amazing Designs and Quality Work!"</h2> 
           <p className='mt-5 text-gray-700 md:text-lg w-2/3 mx-auto'>Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero, ac malesuada vulputate pharetra.</p>
           <img className='mt-5 mb-5 mx-auto rounded-full' src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/08/testimonial.jpg" alt="" />
           <h3 className='font-bold'>John Doe</h3>
           <p className='text-sm'>CEO, Acme Inc.</p>
           </div>
        </div>
    );
};

export default CEO;