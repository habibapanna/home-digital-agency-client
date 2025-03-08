import React from 'react';
import Cards from '../Cards/Cards';

const Banner2 = () => {
    return (
        <div>
            <div className="hero min-h-[400px] relative flex justify-center items-center text-center mb-10">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                    <h2 className='text-xl md:text-2xl font-bold mt-8'>Welcome to The Digital Agency</h2>
                    <p className="py-6 md:text-lg">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
                    </p>
                </div>
            </div>
            <div className="absolute top-100 mt-10">
            <Cards></Cards>
</div>
           
        </div>
    );
};

export default Banner2;
