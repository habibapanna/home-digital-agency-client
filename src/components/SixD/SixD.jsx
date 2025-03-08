import React from 'react';

const SixD = () => {
    const steps = [
        { number: '01', title: 'Discover', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
        { number: '02', title: 'Define', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
        { number: '03', title: 'Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
        { number: '04', title: 'Develop', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
        { number: '05', title: 'Deploy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
        { number: '06', title: 'Deliver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
      ];
    
      return (
        <section className="bg-[#eff2ff] md:pt-24 pt-96">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#242a56] mb-24 text-center">Our 6-D Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 md:gap-20">
              {steps.map((step, index) => (
                <div key={index} className=" bg-opacity-80 p-8 relative">
                  <span className="absolute top-[-2rem] left-5 text-8xl font-extrabold text-gray-300 opacity-40">
                    {step.number}.
                  </span>
                  <h3 className="text-xl font-bold text-[#242a56] mb-4 mt-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default SixD;