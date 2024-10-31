"use client";
import { useGlobalContext } from "@/components/Context/Context";
import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import Image from "next/image";

import React, { useEffect, useState } from "react";

const CardGeneratorPage = () => {
  // Left Sidebar
  const [cardbgColor, setCardbgColor] = useState("#a664e8");
  const [cardTitleColor, setCardTitleColor] = useState("#0a0a0b");
  const [cardContentColor, setCardContentColor] = useState("#272625");
  const [buttonTextColor, setButtonTextColor] = useState("#e0e1db");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  const [rangeValue, setRangeValue] = useState(400);
  const [showCode, setShowCode] = useState(false);
  // checked Button
  const [imgShow, setImgShow] = useState(true);
  const [cardTextCenter, setCardTextCenter] = useState(false);
  const [cardRounded, setcardRounded] = useState(true);

  // Right Sidebar
  const [titleFontSize, setTitleFontSize] = useState(2);
  const [textbold, setTextbold] = useState(true);
  const [titleUpperCase, setTitleUpperCase] = useState(false);
  // content Area
  const [contentFontSize, setContentFontSize] = useState(2);
  const [contentbold, setContentbold] = useState(false);
  const [contentUpperCase, setContentUpperCase] = useState(false);

  // button Area
  const [buttonFontSize, setButtonFontSize] = useState(1);
  const [buttonUpperCase, setButtonUpperCase] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(false);

  // console.log("check move", titleFontSize);

  const cardCode = `
  <div class="flex justify-center items-center rounded-none">
    <div class="shadow-xl  border-[1px] ${
      imgShow ? "h-[400px]" : "h-[200px]"
    }  ${cardRounded ? "rounded-xl" : "rounded-none"} w-[${rangeValue}px]">
    ${
      imgShow
        ? `<figure class="bg-[${cardbgColor}] flex justify-center">
             <img
               src="https://i.ibb.co/hs5bqcp/fruits-removebg-preview.png"
               alt="Fruits"
               width="400"
               height="150"
             />
           </figure>`
        : ""
    }<div class="p-3 ${cardTextCenter ? "text-center" : "text-left"}">
        <h2 class="text-${
          titleFontSize === 1
            ? "sm"
            : titleFontSize === 2
            ? "lg"
            : titleFontSize === 3
            ? "xl"
            : titleFontSize === 4
            ? "2xl"
            : titleFontSize === 5
            ? "3xl"
            : titleFontSize === 6
            ? "4xl"
            : "xl"
        } ${textbold ? "font-bold" : ""} ${
    titleUpperCase ? "uppercase" : ""
  }  text-[${cardTitleColor}]  text-[${cardTitleColor}]">Card Generator</h2>
        <p class="${contentbold ? "font-bold" : ""} ${
    contentUpperCase ? "uppercase" : ""
  } text-${
    contentFontSize === "1"
      ? "sm"
      : contentFontSize === "2"
      ? "lg"
      : contentFontSize === "3"
      ? "xl "
      : contentFontSize === "4"
      ? "2xl "
      : contentFontSize === "5"
      ? "3xl"
      : contentFontSize === "6"
      ? "4xl"
      : "xl"
  } text-[${cardContentColor}]">If a dog chews shoes whose shoes does he choose?</p>
        <div class="flex justify-end mt-5">
          <button class=" ${buttonUpperCase ? "uppercase" : ""} text-${
    buttonFontSize === "1"
      ? "sm"
      : buttonFontSize === "2"
      ? "md"
      : buttonFontSize === "3"
      ? "lg"
      : buttonFontSize === "4"
      ? "xl"
      : "sm"
  } font-bold px-6 py-2 bg-[${buttonBgColor}] hover:bg-opacity-80 text-[${buttonTextColor}] rounded-lg ${
    buttonWidth ? "w-full" : ""
  }">Get Started</button>
        </div>
      </div>
    </div>
  </div>`;

  useEffect(() => {
    if (showCode) {
      // Open modal only when showCode is true
      document.getElementById("my_modal_4").showModal();
    }
  }, [showCode]);

  // Copy Code
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(cardCode)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy code: ", error);
      });
  };

  return (
    <div>
      <div className="shadow-sm bg-white w-full  lg:hidden flex justify-between  py-4 my-4 border-2 px-2">
        <div className="drawer-content  ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className=" btn btn-sm btn-primary drawer-button lg:hidden"
          >
            Left Sidebar Open
          </label>
        </div>

        <div className="drawer-content ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-3"
            className=" btn btn-sm btn-primary drawer-button lg:hidden"
          >
            Right Sidebar Open
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Left Sidebar */}
        <div className="drawer lg:drawer-open  border-2 col-span-1">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side overflow-y-auto  mx-2 custom-scrollbar">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <div className=" bg-primary border text-base-content min-h-full custom-scrollbar overflow-y-auto  p-4">
              {/* Sidebar content here */}
              <div>
                <h2 className="text-xl font-bold text-[#4285F4]"> Settings </h2>
                <p className="text-lg font-medium my-2">
                  width: w-[{rangeValue}px]
                </p>
                <label className="block mb-2 ">
                  <input
                    type="range"
                    min={0}
                    max="800"
                    value={rangeValue}
                    className="range"
                    onChange={(e) => setRangeValue(e.target.value)}
                    style={{ height: "20px" }}
                  />
                </label>
                {/* check Box Area rounded  */}
                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      checked={cardRounded}
                      type="checkbox"
                      onChange={() => setcardRounded(!cardRounded)}
                      className="checkbox"
                    />
                    <span className="label-text">Rounded Area</span>
                  </label>
                </div>

                {/* check Box Area use image */}
                <div className="form-control py-2">
                  <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      type="checkbox"
                      onChange={() => setImgShow(!imgShow)}
                      checked={imgShow}
                      className="checkbox"
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
                    <input
                      type="checkbox"
                      checked={cardTextCenter}
                      onChange={() => setCardTextCenter(!cardTextCenter)}
                      className="checkbox "
                    />
                    <span className="label-text">Center Text</span>
                  </label>
                </div>
              </div>
              <div className="mb-10">
                <div className="border-[1px] my-2"></div>
                <h2 className="text-xl font-bold text-[#4285F4]">
                  Card Color Area:
                </h2>

                {/* Card background */}
                <div>
                  <h2 className="text-md font-bold mt-2 mb-1">
                    Card Background
                  </h2>
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
                      className="w-8 h-8 rounded-full cursor-pointer"
                    />
                    <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg">
                      {cardTitleColor}
                    </span>
                  </label>
                </div>

                {/* Card Content  */}
                <div>
                  <h2 className="text-md font-bold mt-2 mb-1">Card Content</h2>
                  <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
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

                <button
                  onClick={() => setShowCode(true)}
                  className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full my-2 mt-8"
                >
                  View Code
                </button>
                <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="flex justify-center items-center col-span-3 px-4">
          <div
            className={`border-[1px] ${
              imgShow ? "h-[400px]" : "h-[200px]"
            } shadow-xl  ${cardRounded ? "rounded-xl" : " "} `}
            style={{
              width: `${rangeValue}px`,
            }}
          >
            {imgShow ? (
              <>
                <figure
                  style={{ backgroundColor: cardbgColor }}
                  className={`${
                    cardRounded ? "rounded-xl" : " "
                  } flex justify-center`}
                >
                  <Image
                    src="https://i.ibb.co/hs5bqcp/fruits-removebg-preview.png"
                    alt="Fruits"
                    width={400}
                    height={150}
                  />
                </figure>
              </>
            ) : (
              <> </>
            )}
            <div className={`p-3 ${cardTextCenter ? "text-center" : ""}`}>
              <h2
                className={`${textbold ? "font-bold" : ""} ${
                  titleUpperCase ? "uppercase" : ""
                } text-${
                  titleFontSize === "1"
                    ? "sm"
                    : titleFontSize === "2"
                    ? "lg"
                    : titleFontSize === "3"
                    ? "xl"
                    : titleFontSize === "4"
                    ? "2xl"
                    : titleFontSize === 5
                    ? "3xl"
                    : titleFontSize === "6"
                    ? "4xl"
                    : "xl"
                } `}
                style={{
                  color: cardTitleColor,
                }}
              >
                Card Generator
              </h2>
              <p
                className={`${contentbold ? "font-bold" : ""} ${
                  contentUpperCase ? "uppercase" : ""
                } text-${
                  contentFontSize === "1"
                    ? "sm"
                    : contentFontSize === "2"
                    ? "lg"
                    : contentFontSize === "3"
                    ? "xl "
                    : contentFontSize === "4"
                    ? "2xl "
                    : contentFontSize === "5"
                    ? "3xl"
                    : contentFontSize === "6"
                    ? "4xl"
                    : "md"
                } `}
                style={{
                  color: cardContentColor,
                }}
              >
                If a dog chews shoes whose shoes does he is Best choose?
              </p>
              <div className="flex justify-end mt-5">
                <button
                  className={`${buttonUpperCase ? "uppercase" : ""} text-${
                    buttonFontSize === "1"
                      ? "sm"
                      : buttonFontSize === "2"
                      ? "md"
                      : buttonFontSize === "3"
                      ? "lg"
                      : buttonFontSize === "4"
                      ? "xl"
                      : "sm"
                  } px-6 py-2 rounded-lg ${buttonWidth ? "w-full" : ""}`}
                  style={{
                    backgroundColor: buttonBgColor,
                    color: buttonTextColor,
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Modal Use  */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              {showCode && (
                <pre className="mt-4 p-4  bg-gray-800  text-white rounded-lg overflow-auto">
                  <code className="text-purple-500">{cardCode}</code>
                </pre>
              )}
              <div className="modal-action">
                <button
                  onClick={copyToClipboard}
                  className="btn bg-green-500 text-white"
                >
                  Done
                </button>
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button
                    onClick={() => setShowCode(false)}
                    className="btn bg-purple-600 text-white"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        {/* Right side  */}

        <div className="drawer drawer-end lg:drawer-open  border-2 col-span-1">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side overflow-y-auto  mx-2 custom-scrollbar">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="bg-primary border text-base-content min-h-full custom-scrollbar overflow-y-auto w-56 p-4">
              {/* Sidebar content here */}
              {/* Card Title Font and Other */}
              <li>
                <h2 className="text-lg font-bold">Title</h2>
                <p className="text-lg font-medium mt-2">
                  font Size : {titleFontSize}
                </p>
                <label className="block mb-2">
                  <input
                    type="range"
                    min={1}
                    max="6"
                    value={titleFontSize}
                    className="range"
                    onChange={(e) => setTitleFontSize(e.target.value)}
                    style={{ height: "20px" }}
                  />
                </label>
                {/* Title Bold  */}
                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      checked={textbold}
                      type="checkbox"
                      onChange={() => setTextbold(!textbold)}
                      className="checkbox"
                    />
                    <span className="label-text font-bold">Bolds</span>
                  </label>
                </div>

                {/* UpperCase  */}
                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      type="checkbox"
                      checked={titleUpperCase}
                      onChange={() => setTitleUpperCase(!titleUpperCase)}
                      className="checkbox "
                    />
                    <span className="label-text">UpperCase</span>
                  </label>
                </div>
              </li>

              {/* Card Content Font and Other */}
              <li className="border-t-2 my-3">
                <h2 className="text-lg font-bold">Content</h2>
                <p className="text-lg font-medium mt-2">
                  font Size : {contentFontSize}
                </p>
                <label className="block mb-2">
                  <input
                    type="range"
                    min={1}
                    max="6"
                    value={contentFontSize}
                    className="range"
                    onChange={(e) => setContentFontSize(e.target.value)}
                    style={{ height: "20px" }}
                  />
                </label>
                {/* Title Bold  */}
                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      checked={contentbold}
                      type="checkbox"
                      onChange={() => setContentbold(!contentbold)}
                      className="checkbox"
                    />
                    <span className="label-text font-bold">Bolds</span>
                  </label>
                </div>

                {/* UpperCase  */}
                <div className="form-control py-2">
                  <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      type="checkbox"
                      checked={contentUpperCase}
                      onChange={() => setContentUpperCase(!contentUpperCase)}
                      className="checkbox "
                    />
                    <span className="label-text">UpperCase</span>
                  </label>
                </div>
              </li>

              {/* Card Button Font and Other */}
              <li className="border-t-2 my-4">
                <h2 className="text-lg font-bold">Button</h2>
                <p className="text-lg font-medium mt-2">
                  font Size : {buttonFontSize}
                </p>
                <label className="block mb-2">
                  <input
                    type="range"
                    min={1}
                    max="4"
                    value={buttonFontSize}
                    className="range"
                    onChange={(e) => setButtonFontSize(e.target.value)}
                    style={{ height: "20px" }}
                  />
                </label>
                {/* Button  Width  */}

                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      checked={buttonWidth}
                      type="checkbox"
                      onChange={() => setButtonWidth(!buttonWidth)}
                      className="checkbox"
                    />
                    <span className="label-text font-bold">Width Full</span>
                  </label>
                </div>
                {/* UpperCase  */}
                <div className="form-control py-2">
                  <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      type="checkbox"
                      checked={buttonUpperCase}
                      onChange={() => setButtonUpperCase(!buttonUpperCase)}
                      className="checkbox"
                    />
                    <span className="label-text">UpperCase</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGeneratorPage;
