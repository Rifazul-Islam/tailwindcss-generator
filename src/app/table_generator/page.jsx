"use client";
import { useState } from "react";

const TableGenerator = () => {
  const [totalItems, setTotalItems] = useState(5);
  const [totalColumns, setTotalColumns] = useState(3);
  const [gridGap, setGridGap] = useState(2);
  const [tableWidth, setTableWidth] = useState(4);

  const [items, setItems] = useState(6);
  const [showCode, setShowCode] = useState(false);
  const [borderOpen, setBorderOpen] = useState(false);
  const [borderHeight, setBorderHeight] = useState(2);
  const [titleColor, setTitleColor] = useState("#0a0a0b");
  const [desciptionColor, setDesciptionColor] = useState("#272625");
  const [buttonTextColor, setButtonTextColor] = useState("#e0e1db");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  const [cardbgColor, setCardbgColor] = useState("#272625");

  const tablesStore = ` 
     <div class="overflow-x-auto col-span-3">
        <table class="min-w-full text-left text-sm text-gray-500 border border-gray-200">
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-2 border border-gray-200">No</th>
              <th class="px-4 py-2 border border-gray-200">Name</th>
              <th class="px-4 py-2 border border-gray-200">Job</th>
              <th class="px-4 py-2 border border-gray-200">Favorite Color</th>
              <th class="px-4 py-2 border border-gray-200">Action </th>
            </tr>
          </thead>

          <tbody>
            <tr class="bg-white hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-200">
                <input
                  type="checkbox"
                  class="w-4 h-4 rounded focus:ring-2 focus:ring-indigo-500"
                />
              </td>
              <td class="px-4 py-2 border border-gray-200 flex items-center space-x-3">
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
              <td class="px-4 py-2 border border-gray-200">
                Zemlak, Daniel and Leannon
                <br />
                <span class="px-2 py-0.5 text-xs text-gray-600 bg-gray-200 rounded-full">
                  Desktop Support Technician
                </span>
              </td>
              <td class="px-4 py-2 border border-gray-200">Purple</td>
              <td class="px-4 py-2 border border-gray-200 text-right">
                <button class="text-blue-600 hover:underline text-xs">
                  details
                </button>
              </td>
            </tr>

            <tr class="bg-white hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-200">
                <input
                  type="checkbox"
                  class="w-4 h-4 rounded focus:ring-2 focus:ring-indigo-500"
                />
              </td>
              <td class="px-4 py-2 border border-gray-200 flex items-center space-x-3">
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
              <td class="px-4 py-2 border border-gray-200">
                Carroll Group
                <br />
                <span class="px-2 py-0.5 text-xs text-gray-600 bg-gray-200 rounded-full">
                  Tax Accountant
                </span>
              </td>
              <td class="px-4 py-2 border border-gray-200">Red</td>
              <td class="px-4 py-2 border border-gray-200 text-right">
                <button class="text-blue-600 hover:underline text-xs">
                  details
                </button>
              </td>
            </tr>
          </tbody>

          <tfoot class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-2 border border-gray-200"></th>
              <th class="px-4 py-2 border border-gray-200">Name</th>
              <th class="px-4 py-2 border border-gray-200">Job</th>
              <th class="px-4 py-2 border border-gray-200">Favorite Color</th>
              <th class="px-4 py-2 border border-gray-200"></th>
            </tr>
          </tfoot>
        </table>
      </div>`;
  return (
    <div className="px-4 grid grid-cols-2 lg:grid-cols-5 gap-3 my-10">
      {/* left Sidebar */}
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

      {/* Center content */}
      <div className="overflow-x-auto col-span-3">
        <table className="min-w-full text-left text-sm text-gray-500 border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border border-gray-200">No</th>
              <th className="px-4 py-2 border border-gray-200">Name</th>
              <th className="px-4 py-2 border border-gray-200">Job</th>
              <th className="px-4 py-2 border border-gray-200">
                Favorite Color
              </th>
              <th className="px-4 py-2 border border-gray-200">Action </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">01</td>
              <td className="px-4 py-2 border border-gray-200 flex items-center space-x-3">
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
              <td className="px-4 py-2 border border-gray-200">
                Zemlak, Daniel and Leannon
                <br />
                <span className="px-2 py-0.5 text-xs text-gray-600 bg-gray-200 rounded-full">
                  Desktop Support Technician
                </span>
              </td>
              <td className="px-4 py-2 border border-gray-200">Purple</td>
              <td className="px-4 py-2 border border-gray-200 text-right">
                <button className="text-blue-600 hover:underline text-xs">
                  details
                </button>
              </td>
            </tr>

            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded focus:ring-2 focus:ring-indigo-500"
                />
              </td>
              <td className="px-4 py-2 border border-gray-200 flex items-center space-x-3">
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
              <td className="px-4 py-2 border border-gray-200">
                Carroll Group
                <br />
                <span className="px-2 py-0.5 text-xs text-gray-600 bg-gray-200 rounded-full">
                  Tax Accountant
                </span>
              </td>
              <td className="px-4 py-2 border border-gray-200">Red</td>
              <td className="px-4 py-2 border border-gray-200 text-right">
                <button className="text-blue-600 hover:underline text-xs">
                  details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right side  */}
      <div className="col-span-1 border-2 h-full"></div>
    </div>
  );
};

export default TableGenerator;