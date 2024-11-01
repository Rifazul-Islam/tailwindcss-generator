"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TableGenerator = () => {
  const [rowsState, setRowsState] = useState(2);
  const [columnsState, setColumnsState] = useState(4);
  const [gridGap, setGridGap] = useState(2);
  const [borderOpen, setBorderOpen] = useState(true);
  const [tableHadingWidth, setTableHadingWidth] = useState(3);
  const [tableHadingbg, setTableHadingbg] = useState("#e2dada");
  const [tableHadingcolor, setTableHadingcolor] = useState("#000");
  const [totalColumns, setTotalColumns] = useState(4);

  const [items, setItems] = useState(6);
  const [showCode, setShowCode] = useState(false);
  const [borderHeight, setBorderHeight] = useState(2);
  const [titleColor, setTitleColor] = useState("#0a0a0b");
  const [desciptionColor, setDesciptionColor] = useState("#272625");
  const [buttonTextColor, setButtonTextColor] = useState("#e0e1db");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  const [cardbgColor, setCardbgColor] = useState("#272625");

  const borderVisible = `${borderOpen ? "border border-gray-200" : ""}`;
  const tableHadingWidthIncrement =
    tableHadingWidth === 1
      ? "h-7"
      : tableHadingWidth === 2
      ? "h-10"
      : tableHadingWidth === 3
      ? "h-12"
      : tableHadingWidth === 4
      ? "h-14"
      : tableHadingWidth === 5
      ? "h-16"
      : "";

  const columnNames = ["No", "Name", "Job", "Favorite", "Action", "Update"];

  const tablesGenetor = `
      <div class="overflow-x-auto col-span-3">
        <table class="min-w-full text-left text-sm text-gray-500 ${
          borderVisible ? "border border-gray-200" : ""
        }">
          <thead class="bg-gray-100 text-gray-700 ${tableHadingWidthIncrement}">
            <tr>
              ${Array.from({ length: columnsState })
                .map(
                  (_, index) => `
                <th class="px-4 py-2 ${
                  borderVisible ? "border border-gray-200" : ""
                }">
                  ${columnNames[index] || `Column ${index + 1}`}
                </th>
              `
                )
                .join("")}
            </tr>
          </thead>
          <tbody>
            ${Array.from({ length: rowsState })
              .map(
                (_, rowIndex) => `
              <tr class="bg-white hover:bg-gray-50">
                ${Array.from({ length: columnsState })
                  .map(
                    (_, colIndex) => `
                  <td class="px-4 py-2 ${
                    borderVisible ? "border border-gray-200" : ""
                  }">
                    ${
                      colIndex === 0
                        ? rowIndex + 1
                        : `Data ${rowIndex + 1}-${colIndex + 1}`
                    }
                  </td>
                `
                  )
                  .join("")}
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
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
      .writeText(tablesGenetor)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "This code copy successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Failed to copy code:", error);
      });
  };

  return (
    <div className="px-4 grid grid-cols-2 lg:grid-cols-5 gap-3 my-10">
      {/* left Sidebar */}
      <div className="lg:w-56 px-20 lg:px-4 py-1 bg-white min-h-screen border shadow-xl">
        <h2 className="text-blue-500 mb-4 font-bold text-xl">Grid Setting</h2>

        {/* Columns Purpus Use  */}
        <div>
          <p className="font-bold text-lg flex items-center pb-1.5  gap-2 ">
            Columns:
            <span className="bg-slate-300 rounded-md px-2">{columnsState}</span>
          </p>
          <label className="block mb-2">
            <input
              type="range"
              min={1}
              max={6}
              value={columnsState}
              className="range"
              onChange={(e) => setColumnsState(Number(e.target.value))}
              style={{ height: "20px" }}
            />
          </label>
        </div>
        {/* Rows Purpus Use  */}
        <div>
          <p className="font-bold text-lg flex items-center pb-1.5  gap-2 ">
            Rows:
            <span className="bg-slate-300 rounded-md px-2">{rowsState}</span>
          </p>
          <label className="block mb-2">
            <input
              type="range"
              min={1}
              max={10}
              value={rowsState}
              className="range"
              onChange={(e) => setRowsState(Number(e.target.value))}
              style={{ height: "20px" }}
            />
          </label>
        </div>

        <div className="border-2 my-4"></div>

        {/* Border Area */}
        <div className="form-control py-2">
          <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input
              checked={borderOpen}
              onChange={() => setBorderOpen(!borderOpen)}
              type="checkbox"
              className="checkbox"
            />
            <span className="label-text font-bold text-lg">Border</span>
          </label>
        </div>
        {/*  Hading Heading Height Use  */}
        <div>
          <p className="font-bold text-lg flex items-center pb-1.5 gap-2  ">
            Table HR Height:
            <span className="bg-slate-300 rounded-md px-2">
              {tableHadingWidth}
            </span>
          </p>
          <label className="block mb-2">
            <input
              type="range"
              min={1}
              max={5}
              value={tableHadingWidth}
              className="range"
              onChange={(e) => setTableHadingWidth(Number(e.target.value))}
              style={{ height: "20px" }}
            />
          </label>
        </div>

        <div className="border-2 my-4"></div>
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

      {/* Center content */}
      <div className="overflow-x-auto col-span-3">
        <table
          className={`min-w-full text-left text-sm text-gray-500 ${
            borderVisible ? "border border-gray-200" : ""
          }`}
        >
          <thead
            className={`bg-gray-100 text-gray-700 ${tableHadingWidthIncrement}`}
          >
            <tr>
              {/* Render the dynamic columns for headers */}
              {Array.from({ length: columnsState }).map((_, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 ${
                    borderVisible ? "border border-gray-200" : ""
                  }`}
                >
                  {columnNames[index] || `Column ${index + 1}`}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Render dynamic rows */}
            {Array.from({ length: rowsState }).map((_, rowIndex) => (
              <tr key={rowIndex} className="bg-white hover:bg-gray-50">
                {/* Render cells for each row */}
                {Array.from({ length: columnsState }).map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-2 ${
                      borderVisible ? "border border-gray-200" : ""
                    }`}
                  >
                    {colIndex === 0
                      ? rowIndex + 1
                      : `Data ${rowIndex + 1}-${colIndex + 1}`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            {showCode && (
              <pre className="mt-4 p-4  bg-gray-800  text-white rounded-lg overflow-auto">
                <code className="text-purple-500">{tablesGenetor}</code>
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

      {/* Right side  */}
      <div className="col-span-1 border-2 h-full p-3">
        {/* Table Heading  background */}
        <div>
          <h2 className="text-lg font-bold mt-2 mb-1">Background</h2>
          <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={tableHadingbg}
              onChange={(e) => setTableHadingbg(e.target.value)}
              className="appearance-none  w-8 h-8 rounded-full cursor-pointer "
            />
            <span className="label-text font-mono bg-base-200 px-3 py-1.5 rounded-lg font-bold ">
              {tableHadingbg}
            </span>
          </label>
        </div>
        {/* Table Heading  Color */}
        <div>
          <h2 className="text-lg font-bold mt-2 mb-1">Heading Color</h2>
          <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={tableHadingcolor}
              onChange={(e) => setTableHadingcolor(e.target.value)}
              className="appearance-none  w-8 h-8 rounded-full cursor-pointer "
            />
            <span className="label-text font-mono bg-base-200 px-3 py-1.5 rounded-lg font-bold ">
              {tableHadingcolor}
            </span>
          </label>
        </div>
        <div className="border mt-4"></div>
      </div>
    </div>
  );
};

export default TableGenerator;
