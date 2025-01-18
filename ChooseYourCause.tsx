import React from 'react';

const ChooseYourCause = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="mission">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold tracking-tight">
            Our Mission
          </h2>
          
          <p className="text-gray-600 text-lg">
          To empower and uplift disabled individuals by providing comprehensive support,
           skill development, and community integration opportunities. 
           Zunj Divyang Institute and Training Center is dedicated to fostering self-reliance, 
           social inclusion, and economic independence for disabled individuals across Maharashtra,
           with a steadfast commitment to promoting equal opportunities and enriching lives.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 bg-black rounded-full mt-2.5" />
              <span className="text-lg">Inclusive Education and Skill Development</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 bg-black rounded-full mt-2.5" />
              <span className="text-lg">Advocacy for Social Inclusion</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 bg-black rounded-full mt-2.5" />
              <span className="text-lg">Provision of Essential Support and Services</span>
            </li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* Large Image */}
          <div className="col-span-2 md:col-span-1 md:translate-y-12">
            <div className="rounded-[2.5rem] overflow-hidden h-80">
              <img 
                src="/works/CauseImageOne.jpeg" 
                alt="Make a change" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Small Images */}
          <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden h-64">
              <img 
                src="/works/causeImageTwo.png" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden h-64">
              <img 
                src="/works/causeImageThree.jpg" 
                alt="Happy child" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourCause;