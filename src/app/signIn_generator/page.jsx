"use client";

import React, { useEffect, useState } from "react";

const SignInPage = () => {
  const [titleFontSize, setTitleFontSize] = useState(4);
  const [lebalFontSize, setLebalFontSize] = useState(2);
  const [cardbgColor, setCardbgColor] = useState("#ffffff");
  const [labelColor, setLabelColor] = useState("#3F00E7");
  const [textDesctiption, setTextDesctiption] = useState(
    "Sign in to your account"
  );
  const [titleText, setTitleText] = useState("Acme Corp");
  const [roundedLoginCard, setRoundedLoginCard] = useState(true);
  const [shodowLoginCard, setShodowLoginCard] = useState(true);
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [logoInsert, setLogoInsert] = useState(true);
  const [verticalAlignMent, setVerticalAlignMent] = useState(false);
  const [titleBold, setTitleBold] = useState(true);
  const [descriptionFont, setDescriptionFont] = useState(2);
  const [showCode, setShowCode] = useState(false);

  // Bg Color Porpuse use

  const [titleColor, setTitleColor] = useState("#0a0a0b");
  const [desciptionColor, setDesciptionColor] = useState("#272625");
  const [buttonTextColor, setButtonTextColor] = useState("#e0e1db");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");

  //  title font size
  const fontSizeClass = `text-${
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
      : titleFontSize === 7
      ? "5xl"
      : titleFontSize === 8
      ? "6xl"
      : "xl"
  }`;

  // Description Font Size

  const descriptionFontIncrement =
    descriptionFont === 1
      ? "text-sm"
      : descriptionFont === 2
      ? "text-lg"
      : descriptionFont === 3
      ? "text-xl"
      : descriptionFont === 4
      ? "text-2xl"
      : descriptionFont === 5
      ? "text-3xl"
      : descriptionFont === 6
      ? "text-4xl"
      : descriptionFont === 7
      ? "text-5xl"
      : descriptionFont === 8
      ? "text-6xl"
      : "text-xl";

  //  lebal font size
  const labelfontSizeClass = `text-${
    lebalFontSize === 1
      ? "sm"
      : lebalFontSize === 2
      ? "lg"
      : lebalFontSize === 3
      ? "xl"
      : "sm"
  }`;

  // export funtion
  const signinStore = `
 <div class="flex-auto px-4">
          <div class=" bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
              <div class="flex ${
                verticalAlignMent ? "flex-col" : "flex-row"
              } items-center justify-center">
              <figure>
                     <img
                       class="h-12 w-auto"
                       src="https://i.ibb.co.com/MggRsBQ/jobLogo.png"
                       alt="Workflow"
                     />
                      </figure>
                <h2 class="text-center text-[${titleColor}] ${fontSizeClass} ${
    titleBold ? "font-bold" : "font-normal"
  }
         text-gray-900">
                  ${titleText}
                </h2>
              </div>
              ${
                descriptionOpen
                  ? `
                  <h2 class="text-center text-[${desciptionColor}] ${descriptionFontIncrement} font-medium text-gray-900">
                    ${textDesctiption}
                  </h2>
                `
                  : " "
              }
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-[${cardbgColor}] ${
    roundedLoginCard ? "lg:rounded-2xl" : "lg:rounded-none"
  } ${
    shodowLoginCard ? "shadow-2xl" : "lg:shadow-none"
  } py-8 px-4 border sm:rounded-lg sm:px-10">
                <form class="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div class="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        class="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div class="text-sm">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full bg-[${buttonBgColor}] text-[${buttonTextColor}] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
             
              ${
                logoInsert
                  ? `<div class="mt-6">
                  <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div class="mt-6 grid grid-cols-3 gap-3">
                    <div>
                      <a
                        href="#"
                        class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span class="sr-only">Sign in with Facebook</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span class="sr-only">Sign in with Twitter</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span class="sr-only">Sign in with GitHub</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div> `
                  : ""
              }
              </div>
            </div>
          </div>
        </div>
`;

  // code copy purpase for use the UseState Hook
  useEffect(() => {
    if (showCode) {
      // Open modal only when showCode is true
      document.getElementById("my_modal_4").showModal();
    }
  }, [showCode]);

  // Copy Code function
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(signinStore)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy code:", error);
      });
  };

  return (
    <div>
      {/* name same show leftsidebar and right sidebar show */}
      <div className="shadow-sm bg-white w-full  lg:hidden flex justify-between  py-4 my-4 border-2 px-2">
        <div className="drawer-content">
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

          <div className="drawer-side overflow-y-auto custom-scrollbar">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <div className=" bg-primary border text-base-content min-h-full custom-scrollbar overflow-y-auto p-4">
              {/* Sidebar content here */}
              {/* Left Side  */}

              <h2 className="text-blue-500 mb-4 font-bold text-xl">
                SignIn-Setting
              </h2>
              {/* check Box Area rounded  */}
              <div className="form-control py-2">
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={roundedLoginCard}
                    onChange={() => setRoundedLoginCard(!roundedLoginCard)}
                    className="checkbox "
                  />
                  <span className="text-[15px] font-semibold">
                    Rounded Area
                  </span>
                </label>
              </div>

              {/* check Box Area use image */}
              <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={shodowLoginCard}
                    onChange={() => setShodowLoginCard(!shodowLoginCard)}
                    className="checkbox "
                  />
                  <span className="text-[15px] font-semibold">Shadow</span>
                </label>
              </div>

              {/* check Box Area  use Footer */}
              <div className="form-control py-2">
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={descriptionOpen}
                    onChange={() => setDescriptionOpen(!descriptionOpen)}
                    className="checkbox"
                  />
                  <span className="text-[15px] font-semibold">Description</span>
                </label>
              </div>

              {/* check Box Area center Text */}
              <div className="form-control py-2">
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={logoInsert}
                    onChange={() => setLogoInsert(!logoInsert)}
                    className="checkbox "
                  />
                  <span className="text-[15px] font-semibold">
                    Social Icons
                  </span>
                </label>
              </div>

              <div className="border my-8"></div>
              <h2 className="text-blue-500 mb-4 font-bold text-xl">
                Header-Setting
              </h2>

              {/*  Header Setting */}
              <div className="form-control py-2">
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={verticalAlignMent}
                    onChange={() => setVerticalAlignMent(!verticalAlignMent)}
                    className="checkbox"
                  />
                  <span className="text-[15px] font-bold">
                    Vertical Aligned Header
                  </span>
                </label>
              </div>
              <div className="form-control py-2">
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={titleBold}
                    onChange={() => setTitleBold(!titleBold)}
                    className="checkbox "
                  />
                  <span className="label-text">Bold</span>
                </label>
              </div>

              {/* Items Purpus Use  */}
              <div>
                <p className="font-bold text-lg flex items-center pb-1.5 gap-2">
                  Font-Size:
                  <span className="bg-slate-300 rounded-md px-2 ">
                    {fontSizeClass.slice(5, 10)}
                  </span>
                </p>
                <label className="block mb-2">
                  <input
                    type="range"
                    min={1}
                    max={8}
                    value={titleFontSize}
                    className="range"
                    onChange={(e) => setTitleFontSize(Number(e.target.value))}
                    style={{ height: "20px" }}
                  />
                </label>
              </div>

              {/* Header Setting End Point*/}

              {/* form Setting */}
              <div className="border my-8"></div>
              <h2 className="text-blue-500 mb-4 font-bold text-xl">
                Form-Setting
              </h2>

              {/* Label Purpus Use  */}
              <div>
                <p className="font-bold text-lg flex items-center pb-1.5 gap-2  ">
                  Label Font Size:
                  <span className="bg-slate-300 rounded-md px-2 ">
                    {lebalFontSize}
                  </span>
                </p>
                <label className="block mb-2">
                  <input
                    type="range"
                    min={1}
                    max={3}
                    value={lebalFontSize}
                    className="range"
                    onChange={(e) => setLebalFontSize(Number(e.target.value))}
                    style={{ height: "20px" }}
                  />
                </label>
              </div>

              {/* Label Purpus Use  */}
              <div>
                <p className="font-bold text-lg flex items-center pb-1.5 gap-2  ">
                  Description Font Size:
                  <span className="bg-slate-300 rounded-md px-2 ">
                    {descriptionFont}
                  </span>
                </p>
                <label className="block mb-2">
                  <input
                    type="range"
                    min={1}
                    max={8}
                    value={descriptionFont}
                    className="range"
                    onChange={(e) => setDescriptionFont(Number(e.target.value))}
                    style={{ height: "20px" }}
                  />
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

        {/* Contents Or Center  */}
        <div className="flex-auto col-span-3 px-4">
          <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <div
                className={`flex ${
                  verticalAlignMent && "flex-col"
                } items-center justify-center`}
              >
                <figure>
                  <img
                    className="h-12 w-auto"
                    src="https://i.ibb.co.com/MggRsBQ/jobLogo.png"
                    alt="Workflow"
                  />
                </figure>

                <h2
                  className={`text-center text-gray-900 ${fontSizeClass}
                   ${titleBold && "font-bold"}`}
                  style={{ color: titleColor }}
                >
                  {titleText}
                </h2>
              </div>
              {descriptionOpen && (
                <h2
                  className={`text-center ${descriptionFontIncrement} font-medium text-gray-900`}
                  style={{ color: desciptionColor }}
                >
                  {textDesctiption}
                </h2>
              )}
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div
                style={{ backgroundColor: cardbgColor }}
                className={`py-8 px-4  border rounded-lg ${
                  roundedLoginCard ? "lg:rounded-2xl" : "lg:rounded-none"
                }  
                
                ${shodowLoginCard ? "shadow-2xl" : "lg:shadow-none"} sm:px-10 `}
              >
                <form className="space-y-6">
                  <div className="transform scale-105">
                    <label
                      htmlFor="email"
                      className={`block ${labelfontSizeClass} font-medium text-gray-700`}
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="transform scale-105">
                    <label
                      htmlFor="password"
                      className={`block ${labelfontSizeClass} font-medium text-gray-700`}
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      style={{
                        backgroundColor: buttonBgColor,
                        color: buttonTextColor,
                      }}
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                {logoInsert && (
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <span className="sr-only">Sign in with Facebook</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <span className="sr-only">Sign in with Twitter</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <span className="sr-only">Sign in with GitHub</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal Use  */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              {showCode && (
                <pre className="mt-4 p-4  bg-gray-800  text-white rounded-lg overflow-auto">
                  <code className="text-green-500">{signinStore}</code>
                </pre>
              )}
              <div className="modal-action">
                <button
                  onClick={copyToClipboard}
                  className="btn bg-green-500 text-white"
                >
                  Copy
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
        <div className="drawer drawer-end lg:drawer-open  border-2 col-span-1 bg-primary">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side overflow-y-auto ">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="bg-primary text-base-content min-h-full overflow-y-auto p-4 ">
              {/* Sidebar content here */}

              {/* Card background */}
              <div>
                <h2 className="text-lg font-bold mt-2 mb-1">Background</h2>
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={cardbgColor}
                    onChange={(e) => setCardbgColor(e.target.value)}
                    className="appearance-none  w-8 h-8 rounded-full cursor-pointer "
                  />
                  <span className="label-text font-mono bg-base-200 px-3 py-1.5 rounded-lg font-bold ">
                    {cardbgColor}
                  </span>
                </label>
              </div>
              {/* Card Title  */}
              <div className="py-2">
                <h2 className="text-md font-bold mt-2 mb-1">Title Color</h2>
                <label className="flex items-center border-none gap-2  text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={titleColor}
                    onChange={(e) => setTitleColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer "
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg font-mono font-bold">
                    {titleColor}
                  </span>
                </label>
              </div>

              {/* Login Label */}
              <div>
                <h2 className="text-md font-bold mt-2 mb-0.5">
                  Description Color
                </h2>
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={desciptionColor}
                    onChange={(e) => setDesciptionColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer "
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none font-mono font-bold">
                    {desciptionColor}
                  </span>
                </label>
              </div>

              {/* Button Text color */}
              <div className="py-2">
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
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg font-mono font-bold">
                    {buttonTextColor}
                  </span>
                </label>
              </div>

              {/* Button background color */}
              <div>
                <h2 className="text-md font-bold mt-2 mb-1">Button Bg Color</h2>
                <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={buttonBgColor}
                    onChange={(e) => setButtonBgColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer "
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none font-mono font-bold">
                    {buttonBgColor}
                  </span>
                </label>
              </div>

              <div className="border my-4"></div>
              <div>
                <h3 className="font-bold text-md pb-0.5"> Title Text</h3>
                <input
                  id="Ttd"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={titleText}
                  onChange={(e) => setTitleText(e.target.value)}
                />
              </div>

              <div className="my-5">
                <h3 className="font-bold text-md  pb-0.5"> description Text</h3>
                <input
                  id="Ttd"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={textDesctiption}
                  onChange={(e) => setTextDesctiption(e.target.value)}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
