import React from "react";
import { BsSearch } from "react-icons/bs";
// import {SlArrowDown } from "react-icons/sl";
import { categories } from "../categories";
import chatgpt from "../assets/chatgpt.png";
import { items } from "../items.js";
import {mostViewed} from "../mostViewed.js"
const AdminDashboard = () => {
  return (
    <div className="w-screen overflow-x-hidden flex mt-4 mr-4 justify-around">

    {/* left part of Dashboard */}
      <div className="flex flex-col w-[70%]">
      {/* Dashboard heading */}
        <div className="text-lg font-semibold mb-4">Dashboard</div>
        {/* searchbar and category */}
          <div className="flex w-full justify-between">
            <div className="border w-[60%] p-2 rounded-xl border-[#e26dff]  ">
              <div className="flex items-center gap-3 p-1 pl-3 pr-1 bg-[#e26dff] w-[33%] rounded-xl text-white">
                <BsSearch />
                <input
                  placeholder="Search"
                  className="bg-transparent outline-none placeholder:text-white w-full"
                />
              </div>
            </div>
    
            <select className="border p-2 w-[35%] rounded-xl text-[#737678] text-lg border-[#e26dff] ">
              <option value="">categories</option>
              {categories.map((category) => {
                return (
                  <option  className="py-5" value={category.title} key={category.id}>
                    {category.title}
                  </option>
                );
              })}
            </select>
          
          </div>
       {/* cards */}
        <div>
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full border mt-4 p-2 rounded-xl gap-3 flex items-center border-[#e26dff]"
              >
                <div>
                  <img src={chatgpt} alt="" className="h-[5rem]" />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <button className="border border-[#e26dff] px-10 rounded-lg max-w-[8rem] text-[#e26dff] font-medium py-[3px]">
                      Edit
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <div>{`${item.description.substring(0, 50)}...`}</div>
                    <div className="flex gap-2">
                      <button className="border border-[#e26dff] px-10 rounded-lg max-w-[8rem] text-[#e26dff] font-medium py-[3px]">
                        Archive
                      </button>
                      <button className="border border-[#e26dff] px-10 rounded-lg  max-w-[8rem] text-[#e26dff] font-medium py-[3px]">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* right part of Dashboard */}

      {/* early and new dropdown */}
        <div className="w-[30%]  flex flex-col gap-2  mt-10 ml-5">
        <select className="border p-3 w-full rounded-xl text-[#737678] text-lg border-[#e26dff] ">
        <option value="">early/new</option>
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
        <option value="option4">option4</option>
        </select>

{/* most Viewed */}
        <div className="border border-[#e26dff]  rounded-xl w-full mt-4 mb-3">

          <h3 className="text-center border-b border-b-[#e26dff] w-full text-lg p-2 py-2 font-semibold text-[#737678] ">Most Viewed</h3>
          <div className="flex w-full mt-5 mb-5 justify-around">
            <div className="border w-[45%] pl-2 pr-1 py-1 rounded-xl border-[#e26dff]  ">
              <div className="flex items-center gap-3 p-1 pl-3 pr-1 bg-[#e26dff] w-[75%] rounded-xl text-white">
                <BsSearch />
                <input
                  placeholder="Search"
                  className="bg-transparent outline-none placeholder:text-white w-full"
                />
              </div>
            </div>
    
            <select className="border p-2 w-[45%] rounded-xl text-[#737678] text-base border-[#e26dff] ">
              <option value="">categories</option>
              {categories.map((category) => {
                return (
                  <option  className="py-5" value={category.title} key={category.id}>
                    {category.title}
                  </option>
                );
              })}
            </select>
          
          </div>
          <div className="flex flex-col w-[90%] mb-4 mx-auto">
        {mostViewed.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full border mt-2 p-2 rounded-xl gap-3 flex items-center justify-around border-[#e26dff]"
              >
                <div>
                  <img src={chatgpt} alt="" className="h-[3rem]" />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <button className="border border-[#e26dff] px-4 text-xs rounded-lg max-w-[8rem] text-[#e26dff] font-medium py-[1px]">
                      Remove
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-xs w-[75%]">{`${item.description.substring(0,50)}...`}</div>
                    <div className="text-xl text-[#e26dff] font-medium">
                     #{item.rank}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>

        {/* Top Rank */}
        <div className="border border-[#e26dff]  rounded-xl mt-4 mb-3">
        <h3 className="text-center border-b border-b-[#e26dff] w-full text-lg p-2 py-2 font-semibold text-[#737678] ">Top Rank</h3>
        <div className="flex w-full mt-5 mb-5 justify-around">
            <div className="border w-[45%] pl-2 pr-1 py-1 rounded-xl border-[#e26dff]  ">
              <div className="flex items-center gap-3 p-1 pl-3 pr-1 bg-[#e26dff] w-[75%] rounded-xl text-white">
                <BsSearch />
                <input
                  placeholder="Search"
                  className="bg-transparent outline-none placeholder:text-white w-full"
                />
              </div>
            </div>
    
            <select className="border p-2 w-[45%] rounded-xl text-[#737678] text-base border-[#e26dff] ">
              <option value="">categories</option>
              {categories.map((category) => {
                return (
                  <option  className="py-5" value={category.title} key={category.id}>
                    {category.title}
                  </option>
                );
              })}
            </select>
          
          </div>

          {/* add card */}
          <div
                className="w-[90%] mx-auto border  mt-2 p-2 mb-8 rounded-xl gap-3 flex items-center justify-around border-[#e26dff]"
              >
                <div>
                  <img src={chatgpt} alt="" className="h-[3rem] w-[3rem]" />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-semibold">Chatgpt</h3>
                    <div className="text-xl text-[#e26dff] border rounded-lg px-2 border-[#e26dff] font-medium">
                     #0005
                    </div>
                    
                  </div>
                  <div className="flex justify-between">
                    <div className="text-xs w-[75%] truncate">ChatGPT is a sibling model to InstructGPT,</div>
                    <button className="border border-[#e26dff] px-4 text-xs rounded-lg max-w-[8rem] text-[#e26dff] font-medium py-[1px]">
                      Add
                    </button>
                  </div>
                </div>
              </div>
        </div>
        </div>
    </div>
  );
};

export default AdminDashboard;
