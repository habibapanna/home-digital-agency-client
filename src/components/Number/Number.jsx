import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Number = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className='pt-10 flex flex-col gap-15 md:flex-row md:items-center px-10 bg-[#eff2ff]'>
            <div className='md:w-1/5'>
                <h1 className='text-lg md:text-xl font-bold mb-10 md:mb-5 text-[#242a56]'>Some Numbers</h1>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipis.</p>
            </div>
            <div className='flex gap-5 md:w-1/5'> 
                <h1 className='text-4xl md:text-5xl font-bold text-[#6878d6]'>
                    {inView && <CountUp start={0} end={87} duration={2} />}
                </h1>
                <p className='font-bold'>Satisfied Clients</p>
            </div>
            <div className='flex gap-5 md:w-1/5'> 
                <h1 className='text-4xl md:text-5xl font-bold text-[#6878d6]'>
                    {inView && <CountUp start={0} end={150} duration={2} />}
                </h1>
                <p className='font-bold'>Projects Completed</p>
            </div>
            <div className='flex gap-5 md:w-1/5'> 
                <h1 className='text-4xl md:text-5xl font-bold text-[#6878d6]'>
                    {inView && <CountUp start={0} end={28} duration={2} />}
                </h1>
                <p className='font-bold'>Years of Experience</p>
            </div>
            <div className='flex gap-5 md:w-1/5'> 
                <h1 className='text-4xl md:text-5xl font-bold text-[#6878d6]'>
                    {inView && <CountUp start={0} end={56} duration={2} />}K+
                </h1>
                <p className='font-bold'>Happy Customers</p>
            </div>
        </div>
    );
};

export default Number;
