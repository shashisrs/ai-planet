import React from "react";
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer w-full flex justify-center items-center mt-20 relative h-[22vh] sm:h-[25vh] lg:h-[35vh]  ">
      <div className="flex items-center  text-xs sm:text-lg  bg-white rounded-lg p-1 absolute -top-8 left-1/2 -translate-x-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-between">
        <p className="text-[#737678] text-[10px] sm:text-base px-4 whitespace-nowrap">Get updates on mobile and other AI news</p>
        <button className="bg-[#4fbeff] text-white p-2 sm:px-6 md:px-8 rounded-md whitespace-nowrap">Email me</button>
      </div>
      <div className="w-10/12 flex mx-auto flex-col">
      <h3 className="font-bold text-white tracking-wider mb-5  leading-8 text-3xl">AI-PLANET
      </h3>
      <div className=" block sm:flex justify-between items-center mt-4">
        <div className="text-white flex justify-between w-[60%] md:w-[40%] items-center">
          <p className="whitespace-nowrap mr-2 text-base sm:text-[1.5rem]">Connect with us</p>
          <AiOutlineInstagram  className="w-1/2 h-auto sm:max-w-md md:max-w-lg lg:max-w-xl"/>
          <AiFillYoutube className="w-1/2 h-auto sm:max-w-md md:max-w-lg lg:max-w-xl"/>
          <AiFillFacebook className="w-1/2 h-auto sm:max-w-md md:max-w-lg lg:max-w-xl"/>
          <AiOutlineTwitter className="w-1/2 h-auto sm:max-w-md md:max-w-lg lg:max-w-xl"/>
          <AiFillLinkedin className="w-1/2 h-auto sm:max-w-md md:max-w-lg lg:max-w-md"/>
        </div>
        <div className="text-white text-base sm:text-[1.5rem]">Email- aiplanet@gmail.com</div>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
