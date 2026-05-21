import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => {
  const technologies = [
    "ReactJS", "JavaScript", "TailwindCSS", "NextJS", 
    "NodeJS", "ExpressJS", "MongoDB", "ThreeJS", 
    "UI/UX", "WebDevelopment", "WebDesign", "FullStack"
  ];

  const SparkleIcon = () => (
    <svg 
      width="30" 
      height="30" 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="mx-4 md:mx-8 text-[#00F5FF] fill-current"
    >
      <path d="M100 0C100 55.2285 144.772 100 200 100C144.772 100 100 144.772 100 200C100 144.772 55.2285 100 0 100C55.2285 100 100 55.2285 100 0Z" />
    </svg>
  );

  return (
    <div className="w-full bg-[#050505]">
      <Marquee gradient={false} speed={50}>
        <div className="flex items-center py-[4rem] border-t border-b border-[#333]/50 font-mono">
          {technologies.map((tech, index) => (
            <React.Fragment key={index}>
              <span className="text-[1.5rem] md:text-[2rem] font-bold text-[#f1f1f1] hover:text-purple-400 hover:scale-110 transition-all duration-300 cursor-pointer px-4">
                #{tech}
              </span>
              <SparkleIcon />
            </React.Fragment>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;