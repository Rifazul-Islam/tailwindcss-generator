import React from "react";

const page = () => {
  return (
    <div className="p-4 h-screen grid grid-cols-4 gap-3">
      {/* color card 1 */}
      <div className="rounded-lg">
        <div className="bg-sky-400 cursor-pointer h-16 rounded-t-lg"></div>
        <div className="bg-sky-600  h-16"></div>
        <div className="bg-sky-800  h-16"></div>
        <div className="bg-sky-900 rounded-b-lg h-16"></div>
      </div>
      {/* color card 2 */}
      <div className="rounded-lg">
        <div className="bg-sky-400  h-16 rounded-t-lg"></div>
        <div className="bg-sky-600  h-16"></div>
        <div className="bg-sky-800  h-16"></div>
        <div className="bg-sky-900 rounded-b-lg h-16"></div>
      </div>
      {/* color card 2 */}
      <div className="rounded-lg">
        <div className="bg-sky-400  h-16 rounded-t-lg"></div>
        <div className="bg-sky-600  h-16"></div>
        <div className="bg-sky-800  h-16"></div>
        <div className="bg-sky-900 rounded-b-lg h-16"></div>
      </div>
      {/* color card 2 */}
      <div className="rounded-lg">
        <div className="bg-sky-400  h-16 rounded-t-lg"></div>
        <div className="bg-sky-600  h-16"></div>
        <div className="bg-sky-800  h-16"></div>
        <div className="bg-sky-900 rounded-b-lg h-16"></div>
      </div>
    </div>
  );
};

export default page;
