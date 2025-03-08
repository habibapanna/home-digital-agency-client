import React from 'react';

const services = [
    {name: "Joanne Williams", title: "Founder", img: "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/team-1.jpg" },
    {name: "Fred Buster", title: "Director OPS", img: "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/team-2.jpg" },
    {name: "Lisa Hoffman", title: "Director HR", img: "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/team-3.jpg" },
   
  ];

const Leader = () => {
    return (
        <div>
               <div>
                <div className="pt-10 md:pt-16">
      <div className="text-center max-w-7xl mx-auto mb-12 pt-10 pb-5">
        <h1 className="text-4xl md:text-5xl font-bold text-[#242a56]">Meet Our Leadership</h1>
        <p className="text-gray-700 px-4 md:text-lg mt-5 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​
        </p>
      </div>

      <div className="bg-[#eff2ff] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-10">
        {services.map((service, index) => (
          <div key={index} className="">
              <img className='mx-auto' src= {service.img}alt="" /> 
              <div className="flex justify-center font-bold text-2xl mt-5 text-[#242a56]">{service.name}</div>
              <div className="flex justify-center mt-2 text-gray-800 mb-2">{service.title}</div>
            
          </div>
        ))}
      </div>
      
    </div>
        </div>
        </div>
    );
};

export default Leader;