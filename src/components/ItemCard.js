import React, { useState } from "react";
import adcreative from "../assets/adcreative.png";
import checked from "../assets/check.png";
import notSavedPic from "../assets/1.png";
import savedPic from "../assets/2.png";
import { Link } from "react-router-dom";
const ItemCard = (props) => {
  const description = `${props.description.substring(0, 60)}...`;
  const [saved, setSaved] = useState(false);
  return (
    <div className="border-2 outline-none rounded-lg p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <div className="flex  flex-col items-center gap-x-2 gap-y-4">
        <div className="bg-[#edbdd7] p-2 rounded-md">
          <img  src={adcreative} alt="" className="max-w-full  object-cover h-auto"/>
        </div>
        <div className="flex gap-3 items-center w-full">
          <h3 className=" text-left sm:text-[2rem] md:text-[1.3rem] lg:text-xl xl:text-base  text-[#9a9497] font-bold">
            {props.title}
          </h3>
          <img className="h-12 w-12" src={checked} alt="" />
        </div>
        <div className="text-[#737678] sm:text-[1.4rem] md:text-base">{description}</div>
        <div className="flex justify-between w-full">
          <div
            className="border-2  flex items-center px-6  xl:px-2 xl:py-2 py-2 border-[#4fbeff]  cursor-pointer rounded-lg"
            onClick={() => setSaved(!saved)}
          >
            {saved ? (
              <img className="h-8 w-8" src={savedPic} alt="" />
            ) : (
              <img className="h-8 w-8" src={notSavedPic} alt="" />
            )}
          </div>
          <div className="bg-[#e26dff] text-white whitespace-nowrap sm:text-2xl md:text-base flex items-center px-8 md:px-4 rounded-lg cursor-pointer">
            <Link to={props.url}>Try Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
