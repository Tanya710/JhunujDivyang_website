"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const NewsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Dr. Kalam Yuva Prerna Puraskar(Youth Inspiration Award) by the hands of Mangesh Chivate Minsitry Medical Department",
      description: "Samaj Gourav Puraskar by the hands of Abhay Dada Pawar",
      image: "/awards/News1.jpeg",
      date: "2024"
    },
    {
      id: 2,
      title: "Samaj Bhushan Award",
      description: "on ocassion of 3rd December International Day of Persons with Disabilities (IDPD), award granted by Pimpri Chinchwad Municipal Corporation",
      image: "/awards/News2.jpeg",
      date: "2024"
    },
    {
      id: 3,
      title: "Kavyamitra Saunstha(Institution) Pune",
      description: "Shri Shekhar Singh Commissioner Pimpri Chinchwad Municipal Corporation",
      image: "/awards/imageThree.jpeg",
      date: "2023"
    },
    {
      id: 4,
      title: "Award by the hands of Hon.Prakash Dhindale",
      description: "Actor Hon.Prakash Dhindale president of Akhil Bhartiya Marathi Chitrapat Mahamandal. playing a goon's role Actor Kiran Pavar((Film - Jailer)), Actress Fame : Gaadi Ghungarachi Aali Sang, Yogita Jadhav",
      image: "/awards/imageSix.jpeg",
      date: "2023"
    },
    {
      id: 5,
      title: "Cyle Redistribution",
      description: "Today little students were distributed cycles, at this time  every Zunjh divyang institution's office bearer and social worker Praveen Mahajan were present",
      image: "/distributingCycles.png",
      date: "2023"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, newsItems.length - 3) : Math.max(0, prev - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev >= newsItems.length - 3 ? 0 : prev + 1
    );
  };

  // Calculate visible items
  const visibleItems = newsItems.slice(currentIndex, currentIndex + 3);
  // If we need to wrap around to the beginning
  while (visibleItems.length < 3 && currentIndex !== 0) {
    visibleItems.push(newsItems[visibleItems.length % newsItems.length]);
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8" id='news'>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Latest News & Recognition</h2>
        <div className="w-24 h-1 bg-[#0D7C66] mx-auto mt-4"/>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (33.33 + 1.5)}%)`,
            }}
          >
            {newsItems.map((item, index) => (
              <div 
                key={item.id}
                className="flex-none w-1/3 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#0D7C66] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-[#0D7C66] transition-colors" />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors group z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-[#0D7C66] transition-colors" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(newsItems.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / 3) === index ? 'bg-[#0D7C66] scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsShowcase;