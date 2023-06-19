import React from "react";
import {BsSearch} from 'react-icons/bs';
import camera from '../assets/camera.png'

const HeroSection = () => {
  
  return (
    <div className="gap-2 w-full sm:w-10/12 h-[55vh] min-h-[45vh] max-h-[55vh] mx-auto mt-5 relative">
    <div className="camera w-full flex flex-col items-center h-[50vh] md:h-[50vh] p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
      <div className="text-[#ffffff] flex flex-col gap-2 mt-12 items-center">
        <h1 className="font-bold text-2xl md:text-5xl sm:text-center tracking-wider">Welcome to AI-PLANET</h1>
        <p className="text-base md:text-2xl">A platform for all ai tools</p>
      </div>
      <div className="bg-white mt-12 w-[80%] xs:w-[50%] md:w-[40%] rounded-full p-1">
      <div className="flex items-center z-10 gap-3 p-2 pl-3 pr-6 bg-[#4fbeff] w-[50%] md:w-[45%] rounded-full text-white">
          <BsSearch />
          <input placeholder="Search"  className="bg-transparent outline-none placeholder:text-white w-full"/>
      </div>
      </div>
      
    </div>

    <div className="findAi shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex w-[85%] sm:w-[75%] max-w-full h-[44%] md:h-1/2 p-3 md:pl-20 justify-between rounded-lg items-center absolute top-[64%] translate-y-[8%] left-1/2 -translate-x-1/2">
    <div><p className="text-base ml-1 sm:text-sm lg:text-3xl xl:text-lg 2xl:text-xl text-white"><span className="text-3xl md:text-5xl font-bold tracking-wide">Find Ai,</span><br />with our new ai feature</p></div>
    <img src={camera}  className="sm:ml-0 mr-2 w-[13.5rem] md:w-[21.875rem] max-w-full h-auto" alt=""/>
  </div>
    
    
 
    
  </div>
  );
};

export default HeroSection;
