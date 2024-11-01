"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TableGenerator = () => {
  const [totalItems, setTotalItems] = useState(5);
  const [totalColumns, setTotalColumns] = useState(3);
  const [gridGap, setGridGap] = useState(2);
  const [borderOpen, setBorderOpen] = useState(true);
  const [tableHadingWidth, setTableHadingWidth] = useState(4);

  const [items, setItems] = useState(6);
  const [showCode, setShowCode] = useState(false);
  const [borderHeight, setBorderHeight] = useState(2);
  const [titleColor, setTitleColor] = useState("#0a0a0b");
  const [desciptionColor, setDesciptionColor] = useState("#272625");
  const [buttonTextColor, setButtonTextColor] = useState("#e0e1db");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  const [cardbgColor, setCardbgColor] = useState("#272625");

  const borderVisible = `${borderOpen ? "border border-gray-200" : ""}`;

  const tablesGenetor = ` 
     <div class="overflow-x-auto col-span-3">
        <table class="min-w-full text-left text-sm text-gray-500 ${borderVisible}">
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-2 ${borderVisible}">No</th>
              <th class="px-4 py-2 ${borderVisible}">Name</th>
              <th class="px-4 py-2 ${borderVisible}">Job</th>
              <th class="px-4 py-2 ${borderVisible}">Favorite Color</th>
              <th class="px-4 py-2 ${borderVisible}">Action </th>
            </tr>
          </thead>

          <tbody>
            <tr class="bg-white hover:bg-gray-50">
              <td class="px-4 py-2 ${borderVisible}">
                <input
                  type="checkbox"
                  class="w-4 h-4 rounded focus:ring-2 focus:ring-indigo-500"
                />
              </td>
              <td class="px-4 py-2 ${borderVisible} flex items-center space-x-3">
                <img
                  class="h-12 w-12 rounded-full border border-gray-300 object-cover"
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar"
                />
                <div>
                  <p class="font-semibold text-gray-800">Hart Hagerty</p>
                  <p class="text-xs text-gray-500">United States</p>
                </div>
              </td>
              <td class="px-4 py-2 ${borderVisible}">
                Zemlak, Daniel and Leannon
                <br />
                <span class="px-2 py-0.5 text-xs text-gray-600 bg-gray-200 rounded-full">
                  Desktop Support Technician
                </span>
              </td>
              <td class="px-4 py-2 ${borderVisible}">Purple</td>
              <td class="px-4 py-2 ${borderVisible} text-right">
                <button class="text-blue-600 hover:underline text-xs">
                  details
                </button>
              </td>
            </tr>

            <tr class="bg-white hover:bg-gray-50">
              <td class="px-4 py-2 ${borderVisible}">
               02
              </td>
              <td class="px-4 py-2 ${borderVisible} flex items-center space-x-3">
                <img
                  class="h-12 w-12 rounded-full border border-gray-300 object-cover"
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar"
                />
                <div>
                  <p class="font-semibold text-gray-800">Brice Swyre</p>
                  <p class="text-xs text-gray-500">China</p>
                </div>
              </td>
              <td class="px-4 py-2 ${borderVisible}">
                Carroll Group
                <br />
                <span class="px-2 py-0.5 text-xs text-gray-600 bg-gray-200 rounded-full">
                  Tax Accountant
                </span>
              </td>
              <td class="px-4 py-2 ${borderVisible}">Red</td>
              <td class="px-4 py-2 ${borderVisible} text-right">
                <button class="text-blue-600 hover:underline text-xs">
                  details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;

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

  const descriptionFontIncrement =
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
  return (
    <div className="px-4 grid grid-cols-2 lg:grid-cols-5 gap-3 my-10">
      {/* left Sidebar */}
      <div className="lg:w-56 px-20 lg:px-4 py-1 bg-white min-h-screen border shadow-xl">
        <h2 className="text-blue-500 mb-4 font-bold text-xl">Grid Setting</h2>

        {/* Items Purpus Use  */}
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

        {/* Columns Purpus Use  */}
        <div>
          <p className="font-bold text-lg flex items-center pb-1.5  gap-2 ">
            Columns:
            <span className="bg-slate-300 rounded-md px-2">{totalColumns}</span>
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
          className={`min-w-full text-left text-sm text-gray-500 ${borderVisible}`}
        >
          <thead className="bg-gray-100 text-gray-700 h-20">
            <tr>
              <th
                className={`px-4 py-2 ${
                  borderOpen ? "border border-gray-200" : ""
                }`}
              >
                No
              </th>
              <th className={`px-4 py-2 ${borderVisible}`}>Name</th>
              <th className={`px-4 py-2 ${borderVisible}`}>Job</th>
              <th className={`px-4 py-2 ${borderVisible}`}>Favorite Color</th>
              <th className={`px-4 py-2 ${borderVisible}`}>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white hover:bg-gray-50">
              <td className={`px-4 py-2 ${borderVisible}`}>01</td>
              <td
                className={`px-4 py-2 ${borderVisible} flex items-center space-x-3`}
              >
                <img
                  className="h-12 w-12 rounded-full border border-gray-300 object-cover"
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar"
                />
                <div>
                  <p className="font-semibold text-gray-800">Hart Hagerty</p>
                  <p className="text-xs text-gray-500">United States</p>
                </div>
              </td>
              <td className={`px-4 py-2 ${borderVisible}`}>
                Zemlak, Daniel and Leannon
                <br />
                <span className="px-2 py-0.5 text-xs text-gray-600 bg-gray-200 rounded-full">
                  Desktop Support Technician
                </span>
              </td>
              <td className={`px-4 py-2 ${borderVisible}`}>Purple</td>
              <td className={`px-4 py-2 ${borderVisible}`}>
                <button className="text-blue-600 hover:underline text-xs">
                  details
                </button>
              </td>
            </tr>

            <tr className="bg-white hover:bg-gray-50">
              <td className={`px-4 py-2 ${borderVisible}`}>02</td>
              <td
                className={`px-4 py-2 ${borderVisible}  flex items-center space-x-3`}
              >
                <img
                  className="h-12 w-12 rounded-full border border-gray-300 object-cover"
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar"
                />
                <div>
                  <p className="font-semibold text-gray-800">Brice Swyre</p>
                  <p className="text-xs text-gray-500">China</p>
                </div>
              </td>
              <td className={`px-4 py-2 ${borderVisible}`}>
                Carroll Group
                <br />
                <span className="px-2 py-0.5 text-xs text-gray-600 bg-gray-200 rounded-full">
                  Tax Accountant
                </span>
              </td>
              <td className={`px-4 py-2 ${borderVisible}`}>Red</td>
              <td className={`px-4 py-2 ${borderVisible}`}>
                <button className="text-blue-600 hover:underline text-xs">
                  details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Modal Use  */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            {showCode && (
              <pre className="mt-4 p-4  bg-gray-800  text-white rounded-lg overflow-auto">
                <code className="text-green-500">{tablesGenetor}</code>
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
      <div className="col-span-1 border-2 h-full"></div>
    </div>
  );
};

export default TableGenerator;
