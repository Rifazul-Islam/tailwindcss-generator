"use client";
import Link from "next/link";

const Navber = () => {
  const menuItems = (
    <>
      <Link href="/"> Home </Link>
      <Link href="/tool"> Tools </Link>
      <Link href="/">Blog </Link>
    </>
  );

  return (
    <div className="navbar bg-primary shadow-xl px-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <div className=" text-[22px] font-bold hidden lg:flex gap-2 ">
          <span className="text-[#4285F4]">TailwindCss</span>
          <span className="text-[#6f9ce6]"> Genaretor</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 space-x-3 text-[18px] font-bold">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm bg-[#4285F4] hover:bg-[#0c59d5] text-white lg:flex hidden">
          Get Started
        </a>
        <div className="text-[22px] font-bold flex lg:hidden">
          <span className="text-[#6f9ce6]"> Genaretor</span>
        </div>
      </div>
    </div>
  );
};

export default Navber;
