"use client";
import React, { useEffect, useState } from "react";

const GridGenerator = () => {
  const [totalItems, setTotalItems] = useState(5);
  const [totalColumns, setTotalColumns] = useState(3);
  const [gridGap, setGridGap] = useState(2);

  const [items, setItems] = useState(6);
  const [showCode, setShowCode] = useState(false);
  const [borderOpen, setBorderOpen] = useState(false);
  const [borderHeight, setBorderHeight] = useState(2);

  const totalRows = Math.ceil(totalItems / totalColumns);
  const gridStyles = {
    gridTemplateColumns: `repeat(${totalColumns}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${totalRows}, minmax(0, 1fr))`,
  };

  const gridGenerators = `
    <div className="grid grid-cols-1 lg:grid-cols-${totalColumns} gap-${gridGap}">
      ${Array.from({ length: totalItems })
        .map(
          (_) => `
        <div className="bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg shadow-lg p-6 py-10 text-white"></div>
      `
        )
        .join("")}
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
      .writeText(gridGenerators)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy code:", error);
      });
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-2">
        {/* Left Sidebar */}
        <div className="lg:w-56 px-20 lg:px-4 py-1 bg-white min-h-screen border shadow-xl">
          <h2 className="text-blue-500 mb-4 font-bold text-xl">Grid Setting</h2>

          {/* Items Purpus Use  */}
          <div>
            <p className="font-bold text-lg flex items-center pb-1.5 gap-2  ">
              Items:
              <span className="bg-slate-300 rounded-md px-2">{totalItems}</span>
            </p>
            <label className="block mb-2">
              <input
                type="range"
                min={0}
                max={14}
                value={totalItems}
                className="range"
                onChange={(e) => setTotalItems(Number(e.target.value))}
                style={{ height: "20px" }}
              />
            </label>
          </div>

          {/* Columns Purpus Use  */}
          <div>
            <p className="font-bold text-lg flex items-center pb-1.5  gap-2 ">
              Columns:
              <span className="bg-slate-300 rounded-md px-2">
                {totalColumns}
              </span>
            </p>
            <label className="block mb-2">
              <input
                type="range"
                min={0}
                max={10}
                value={totalColumns}
                className="range"
                onChange={(e) => setTotalColumns(Number(e.target.value))}
                style={{ height: "20px" }}
              />
            </label>
          </div>
          <div className="border-2 my-8"></div>
          {/* Gap Purpus Use  */}
          <div>
            <p className="font-bold text-lg flex items-center pb-1.5  gap-2 ">
              Grid-Gap:
              <span className="bg-slate-300 rounded-md px-2">{gridGap} </span>
            </p>
            <label className="block mb-2">
              <input
                type="range"
                min={0}
                max={6}
                value={gridGap}
                className="range"
                onChange={(e) => setGridGap(Number(e.target.value))}
                style={{ height: "20px" }}
              />
            </label>
          </div>

          {/* Border Purpus Use  */}
          <div>
            <p className="font-bold text-lg flex items-center pb-0.5 gap-2 ">
              Border Area
            </p>
            {/* Border Area */}
            <div className="form-control py-2">
              <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                <input
                  checked={borderOpen}
                  onChange={() => setBorderOpen(!borderOpen)}
                  type="checkbox"
                  className="checkbox "
                />
                <span className="label-text font-bold">Border</span>
              </label>
            </div>

            <div>
              <p className="font-semibold text-lg flex items-center pb-0.5 gap-2 ">
                Border Height :
                <span className="bg-slate-300 rounded-md px-2 ">
                  {borderHeight}
                </span>
              </p>
              <label className="block mb-2">
                <input
                  type="range"
                  min={2}
                  max={4}
                  value={borderHeight}
                  className="range"
                  onChange={(e) => setBorderHeight(Number(e.target.value))}
                  style={{ height: "20px" }}
                />
              </label>
            </div>
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

        {/* Center content  */}
        <div className="flex-auto px-2 mt-5">
          <div
            style={gridStyles}
            className={`grid grid-cols-1 lg:grid-cols-0 gap-${gridGap} ${
              borderOpen
                ? `border-${
                    borderHeight === 2 ? 2 : borderHeight === 4 ? 4 : 2
                  } `
                : "border-none"
            } p-5`}
          >
            {Array.from({ length: totalItems }).map((_, index) => (
              <div
                key={index}
                className="bg-gradient-to-br  from-pink-500 to-orange-400 rounded-lg shadow-lg p-6 py-10 text-white"
              ></div>
            ))}
          </div>
          {/* Modal Use  */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              {showCode && (
                <pre className="mt-4 p-4  bg-gray-800  text-white rounded-lg overflow-auto">
                  <code className="text-purple-500">{gridGenerators}</code>
                </pre>
              )}
              <div className="modal-action">
                <button
                  onClick={copyToClipboard}
                  className="btn bg-green-500 text-white"
                >
                  Copy Code
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
        {/* Right Side  */}
        <div className="lg:w-60 px-20 lg:px-4 py-1 bg-white min-h-screen border shadow-xl ">
          <div>
            <h2 className="text-xl font-serif font-semibold"> Presents </h2>

            <div className="grid  grid-cols-3 gap-2 px-2 py-3 ">
              <div className=" bg-blue-500 rounded-lg p-7 col-span-2"> </div>
              <div className=" bg-blue-400 rounded-lg p-7"></div>
              <div className=" bg-lime-500 rounded-lg p-7"></div>
              <div className=" bg-lime-500  rounded-lg p-7 col-span-2"></div>
              <div className=" bg-purple-600  rounded-lg p-7 col-span-2"></div>
              <div className=" bg-purple-400 rounded-lg p-7"></div>
            </div>

            <div className="text-center mt-10 ">
              <button className="btn btn-sm w-full text-white bg-[#4285F4] hover:bg-[#095ce1] ">
                Grid Present
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridGenerator;
