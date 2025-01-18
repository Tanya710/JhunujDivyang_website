"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  title: string;
  image: string;
  description: string;
};

type Props = {};
const Projects = (props: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);
  const [scrollPosition, setScrollPosition] = useState({
    isAtStart: true,
    isAtEnd: false
  });

  const projects = [
    {
      title: "Redistributing Cycles",
      image: "distributingCycles.png",
      description: "Providing transportation to students in need.",
    },
    {
      title: "Mobile Reparing Training",
      image: "/works/mobileRepairing.jpeg",
      description: "Empowering youth with technical skills.",
    },
    {
      title: "Enabling Marraige",
      image: "/awards/mainPhoto.jpeg",
      description: "Arranging marriages for differently-abled individuals.",
    },
    {
      title: "Showing Path",
      image: "/works/showingPath.jpeg",
      description: "Showing path to differently-abled individuals.",
    },
    {
      title: "Incense Stick Making",
      image: "/works/incenseStick.jpeg",
      description: "Training in incense stick making for disabled youth.",
    },
  ];

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowButtons(scrollWidth > clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setScrollPosition({
          isAtStart: scrollLeft <= 0,
          isAtEnd: scrollLeft + clientWidth >= scrollWidth - 1
        });
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 340;
      const currentScroll = container.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-muted/50 relative">
      <div className="container mx-auto px-4">
        <div className='flex flex-row justify-between items-center'>
          <h2 className="text-4xl font-bold mb-10">Our Work</h2>
          
          <div className='flex flex-row gap-3 items-center mb-8'>
            <button
              onClick={() => scroll('left')}
              className={`p-3 shadow-md rounded-full transition-all duration-300 ease-in-out ${
                scrollPosition.isAtStart 
                ? "bg-white text-gray-400 cursor-not-allowed" 
                : "bg-[#0D7C66] text-white hover:bg-[#0A6553]"
              }`}
              disabled={scrollPosition.isAtStart}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll('right')}
              className={`p-3 shadow-md rounded-full transition-all duration-300 ease-in-out ${
                scrollPosition.isAtEnd 
                ? "bg-white text-gray-400 cursor-not-allowed" 
                : "bg-[#0D7C66] text-white hover:bg-[#0A6553]"
              }`}
              disabled={scrollPosition.isAtEnd}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 rounded-3xl scroll-smooth pb-4 hide-scrollbar transition-all duration-500 ease-in-out"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="flex-none w-[17rem] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 flex-grow">{project.description}</p>
                    <button className="w-full mt-4 py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-100 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;