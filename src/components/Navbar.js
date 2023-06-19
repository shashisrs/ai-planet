import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  let Links = [
    { name: "Dashboard", link: "/" },
    { name: "Favourites", link: "/favourites" },
    { name: "Submit", link: "/submit" },
    { name: "Help", link: "/help" },
  ];
  let [open, setOpen] = useState(false);
  return (

    <div className="mb-32">
      <div className=" w-full fixed z-10 top-0 ">
        <div className="md:flex items-center justify-between bg-white shadow-md  py-4 md:px-10 px-7">
        
          <h1 className='text-[#e26dff] text-2xl cursor-pointer pt-4 mr-1'>AI-Planet</h1>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 focus:bg-transparent border-2 text-[#9a9497] border-[#9a9497] px-1 rounded-lg transition-all ease-in duration-200 cursor-pointer md:hidden"
          >
            {open ? <RxCross1 /> : <RxHamburgerMenu />}
          </div>

          <div
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <div key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <Link
                  to={link.link}
                  className=" hover:text-gray-400 text-[#737678] duration-500"
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <FcGoogle onClick={()=>navigate("/admin")} className="md:ml-8 text-xl md:my-0 my-7"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
