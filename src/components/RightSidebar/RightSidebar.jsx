"use client";
import { useState } from "react";
const RightSidebar = () => {
  const [titleFontSize, setTitleFontSize] = useState(2);
  const [contentFontSize, setContentFontSize] = useState(2);
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" w-60 bg-primary border text-base-content min-h-full  p-4">
            {/* Sidebar content here */}
            {/* Card Title Font and Other */}
            <li>
              <h2 className="text-lg font-bold"> Title</h2>
              <p className="text-lg font-medium mt-2">
                font Size : {titleFontSize}
              </p>
              <label className="block mb-2">
                <input
                  type="range"
                  min={0}
                  max="100"
                  value={titleFontSize}
                  className="range"
                  onChange={(e) => setTitleFontSize(e.target.value)}
                  style={{ height: "20px" }}
                />
              </label>
              {/* Title Bold  */}
              <div className="form-control py-2">
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="checkbox "
                  />
                  <span className="label-text font-bold">Bold</span>
                </label>
              </div>

              {/* UpperCase  */}
              <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input type="checkbox" className="checkbox " />
                  <span className="label-text">UpperCase</span>
                </label>
              </div>
            </li>

            {/* Card Content Font and Other */}
            <li className="border-t-2 my-3 ">
              <h2 className="text-lg mt-4 font-bold"> Contents</h2>
              <p className="text-lg font-medium mt-2">
                font Size : {contentFontSize}
              </p>
              <label className="block mb-2">
                <input
                  type="range"
                  min={0}
                  max="100"
                  value={contentFontSize}
                  className="range"
                  onChange={(e) => setContentFontSize(e.target.value)}
                  style={{ height: "20px" }}
                />
              </label>
              {/* Title Bold  */}
              <div className="form-control py-2">
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="checkbox "
                  />
                  <span className="label-text font-bold">Bold</span>
                </label>
              </div>

              {/* UpperCase  */}
              <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input type="checkbox" className="checkbox " />
                  <span className="label-text">UpperCase</span>
                </label>
              </div>
            </li>

            {/* Card Button Font and Other */}
            <li className="border-t-2 my-2">
              <h2 className="text-lg font-bold"> Button</h2>
              <p className="text-lg font-medium mt-2">
                font Size : {contentFontSize}
              </p>
              <label className="block mb-2">
                <input
                  type="range"
                  min={0}
                  max="100"
                  value={contentFontSize}
                  className="range"
                  onChange={(e) => setContentFontSize(e.target.value)}
                />
              </label>
              {/* Title Bold  */}
              {/* <div className="form-control py-2">
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input type="checkbox" checked className="checkbox " />
                  <span className="label-text font-bold">Bold</span>
                </label>
              </div> */}

              {/* UpperCase  */}
              {/* <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input type="checkbox" className="checkbox " />
                  <span className="label-text">UpperCase</span>
                </label>
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
