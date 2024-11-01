import React from "react";

const page = () => {
  return (
    <div className="m-10">
      <div class="overflow-x-auto col-span-3">
        <table class="min-w-full text-left text-sm text-gray-500 border border-gray-200">
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-2 border border-gray-200">No</th>

              <th class="px-4 py-2 border border-gray-200">Name</th>

              <th class="px-4 py-2 border border-gray-200">Job</th>

              <th class="px-4 py-2 border border-gray-200">Favorite</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-200">1</td>

              <td class="px-4 py-2 border border-gray-200">Data 1-2</td>

              <td class="px-4 py-2 border border-gray-200">Data 1-3</td>

              <td class="px-4 py-2 border border-gray-200">Data 1-4</td>
            </tr>

            <tr class="bg-white hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-200">2</td>

              <td class="px-4 py-2 border border-gray-200">Data 2-2</td>

              <td class="px-4 py-2 border border-gray-200">Data 2-3</td>

              <td class="px-4 py-2 border border-gray-200">Data 2-4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
