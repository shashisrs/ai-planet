import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className=" flex flex-col gap-3 w-[15%] mt-4 ml-4">
      <div className="border-2 border-[#e26dff] rounded-lg ">
        <h3 className="text-center border w-full text-2xl py-3 border-b-[#e26dff]">
          Admin Panel
        </h3>

        <div className="flex flex-col items-center gap-2 mb-6 mt-3 text-lg justify-center">
          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <IoMdAddCircle className="text-white" />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>

          <div className="flex justify-around font-[500] rounded-sm bg-[#e26dff] text-white px-2 py-1 items-center w-[70%] border border-[#e26dff]">
            <MdDashboard />
            <span>Dashboard</span>
          </div>
        </div>
      </div>

      <div className="border-2 border-[#e26dff] text-lg rounded-lg ">
      <h3 className="text-center border w-full text-2xl py-1 border-b-[#e26dff]">
        Login As
      </h3>

    <div className="flex flex-col gap-[2px] mt-2 mb-2 items-center">
      <button className="w-[93%] border border-[#e26dff] px-2">Admin</button>
      <button className="w-[93%]  border border-[#e26dff]  px-2">User</button>
      <button className="w-[93%]  border border-[#e26dff]  px-2">Logout</button>
    </div>
      </div>
    </div>
  );
};

export default Sidebar;
