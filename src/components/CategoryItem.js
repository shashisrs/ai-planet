import React from "react";

const CategoryItem = (props) => {
  return (
    <button className=" border sm:border-2  border-[#e073ff] text-[#737678] text-[10px]  whitespace-nowrap sm:text-base  mx-1 sm:mx-2  px-5 py-1 sm:px-6 rounded-2xl">
      {props.title}
    </button>
  );
};

export default CategoryItem;
