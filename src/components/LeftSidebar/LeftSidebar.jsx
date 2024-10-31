"use client";
import { useState } from "react";
import "./LeftSidebar.css";
import { useGlobalContext } from "../Context/Context";

const LeftSidebar = () => {
  // const [cardbgColor, setCardbgColor] = useState("#a664e8");
  // const [cardTitleColor, setCardTitleColor] = useState("#557edd");
  // const [cardContentColor, setCardContentColor] = useState("#e89569");
  // const [buttonTextColor, setButtonTextColor] = useState("#212702");
  // const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  // const [rangeValue, setRangeValue] = useState(5);
  // const { count, setCount } = useGlobalContext();
  // const { cardbgColor: checkedsss } = useGlobalContext();
  // console.log(checkedsss);

  const {
    cardbgColor,
    setCardbgColor,
    cardTitleColor,
    setCardTitleColor,
    cardContentColor,
    setCardContentColor,
    buttonTextColor,
    setButtonTextColor,
    buttonBgColor,
    setButtonBgColor,
    rangeValue,
    setRangeValue,
    count,
    setCount,
  } = useGlobalContext();

  return (
    <div>
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
        <div
          className="drawer-side overflow-y-auto  mx-2 custom-scrollbar"
          style={{
            maxHeight: "calc(100vh - 0px)",
            backgroundColor: "#F8F9FA",
          }}
        >
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className=" bg-primary border text-base-content min-h-full custom-scrollbar overflow-y-auto w-60 p-4">
            {/* Sidebar content here */}

            <div>
              <h2 className="text-xl font-bold text-[#4285F4]"> Settings </h2>
              <p className="text-lg font-medium mt-2"> width: w-{rangeValue}</p>
              <label className="block mb-2 ">
                <input
                  type="range"
                  min={0}
                  max="100"
                  value={rangeValue}
                  className="range"
                  onChange={(e) => setRangeValue(e.target.value)}
                  style={{ height: "20px" }}
                />
              </label>
              {/* check Box Area rounded  */}
              <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input type="checkbox" className="checkbox " />
                  <span className="label-text">Rounded Area</span>
                </label>
              </div>

              {/* check Box Area use image */}
              <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="checkbox "
                  />
                  <span className="label-text">Use Image</span>
                </label>
              </div>

              {/* check Box Area  use Footer */}
              <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input type="checkbox" className="checkbox " />
                  <span className="label-text ">Use Footer</span>
                </label>
              </div>

              {/* check Box Area center Text */}
              <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input type="checkbox" className="checkbox " />
                  <span className="label-text">Center Text</span>
                </label>
              </div>
            </div>
            <div className="mb-10">
              <div className="border-[1px] my-2"></div>
              <h2 className="text-xl font-bold text-[#4285F4]">
                Card Color Area:
              </h2>
              <button className="btn" onClick={() => setCount(count + 1)}>
                Counter
              </button>
              {/* Card background */}
              <div>
                <h2 className="text-md font-bold mt-2 mb-1">Card Background</h2>
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={cardbgColor}
                    onChange={(e) => setCardbgColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer border-none"
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg ">
                    {cardbgColor}
                  </span>
                </label>
              </div>
              {/* Card Title  */}
              <div>
                <h2 className="text-md font-bold mt-2 mb-1">Card Title</h2>
                <label className="flex items-center border-none gap-2  text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={cardTitleColor}
                    onChange={(e) => setCardTitleColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer "
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg">
                    {cardTitleColor}
                  </span>
                </label>
              </div>

              {/* Card Content  */}
              <div>
                <h2 className="text-md font-bold mt-2 mb-1">Card Content</h2>
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={cardContentColor}
                    onChange={(e) => setCardContentColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer "
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none">
                    {cardContentColor}
                  </span>
                </label>
              </div>

              {/* Button Text color */}
              <div>
                <h2 className="text-md font-bold mt-2 mb-1">
                  Button Text Color
                </h2>
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={buttonTextColor}
                    onChange={(e) => setButtonTextColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer border-none"
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg ">
                    {buttonTextColor}
                  </span>
                </label>
              </div>

              {/* Button background color */}
              <div>
                <h2 className="text-md font-bold mt-2 mb-1">
                  Button Background Color
                </h2>
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={buttonBgColor}
                    onChange={(e) => setButtonBgColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer "
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none">
                    {buttonBgColor}
                  </span>
                </label>
              </div>

              <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full my-2 mt-8">
                View Code
              </button>
              <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {<CardGenerator cardbgColor={cardbgColor} />} */}
    </div>
  );
};

export default LeftSidebar;
