"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const ColorPalettePage = () => {
  const [hoverColor, setHoverColor] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseOver = (colorCode) => {
    setHoverColor(colorCode);
  };

  const handleMouseOut = () => {
    setHoverColor(null);
  };

  const handleClick = async (color) => {
    try {
      await navigator.clipboard.writeText(color);
      setShowTooltip(true);
      // Hide the tooltip after 1.5 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {colors?.map((colored) => (
        <div key={colored?.narmal}>
          {/* Normal Color porpuse Use this div */}
          <div
            className="cursor-pointer h-16 rounded-t-lg relative"
            style={{ backgroundColor: colored?.narmal }}
            onMouseOver={() => handleMouseOver(colored?.narmal)}
            onMouseOut={handleMouseOut}
          >
            {hoverColor === colored?.narmal && (
              <span
                onClick={() => handleClick(colored?.narmal)}
                className="absolute bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm bottom-1 left-1"
              >
                {colored?.narmal}
              </span>
            )}
            {showTooltip && hoverColor === colored?.narmal && (
              <div className="absolute text-sm top-0 left-1/2 transform -translate-x-1/2 mt-2 px-2 py-0.5 text-white bg-gray-800 rounded">
                Copied !
              </div>
            )}
          </div>

          {/* Medium Color porpuse Use this div */}
          <div
            className="cursor-pointer h-16 relative"
            style={{ backgroundColor: colored?.medium }}
            onMouseOver={() => handleMouseOver(colored?.medium)}
            onMouseOut={handleMouseOut}
          >
            {hoverColor === colored?.medium && (
              <span
                onClick={() => handleClick(colored?.medium)}
                className="absolute bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm bottom-1 left-1"
              >
                {colored?.medium}
              </span>
            )}

            {showTooltip && hoverColor === colored?.medium && (
              <div className="absolute text-sm top-0 left-1/2 transform -translate-x-1/2 mt-2 px-2 py-0.5 text-white bg-gray-800 rounded">
                Copied !
              </div>
            )}
          </div>

          {/* SemiColor porpuse Use this div */}
          <div
            className="cursor-pointer h-16 relative"
            style={{ backgroundColor: colored?.semiColor }}
            onMouseOver={() => handleMouseOver(colored?.semiColor)}
            onMouseOut={handleMouseOut}
          >
            {hoverColor === colored?.semiColor && (
              <span
                onClick={() => handleClick(colored?.semiColor)}
                className="absolute bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm bottom-1 left-1"
              >
                {colored?.semiColor}
              </span>
            )}

            {showTooltip && hoverColor === colored?.semiColor && (
              <div className="absolute text-sm top-0 left-1/2 transform -translate-x-1/2 mt-2 px-2 py-0.5 text-white bg-gray-800 rounded">
                Copied !
              </div>
            )}
          </div>

          {/* boldColor porpuse Use this div */}
          <div
            className="cursor-pointer h-16 rounded-b-lg relative"
            style={{ backgroundColor: colored?.boldColor }}
            onMouseOver={() => handleMouseOver(colored?.boldColor)}
            onMouseOut={handleMouseOut}
          >
            {hoverColor === colored?.boldColor && (
              <span
                onClick={() => handleClick(colored?.boldColor)}
                className="absolute bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm bottom-1 left-1"
              >
                {colored?.boldColor}
              </span>
            )}
            {showTooltip && hoverColor === colored?.boldColor && (
              <div className="absolute text-sm top-0 left-1/2 transform -translate-x-1/2 mt-2 px-2 py-0.5 text-white bg-gray-800 rounded">
                Copied !
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const colors = [
  {
    narmal: "#818cf8",
    medium: "#4f46e5",
    semiColor: "#3730a3",
    boldColor: "#1e1b4b",
  },
  {
    narmal: "#a855f7",
    medium: "#7e22ce",
    semiColor: "#6b21a8",
    boldColor: "#3b0764",
  },
  {
    narmal: "#f472b6",
    medium: "#db2777",
    semiColor: "#9d174d",
    boldColor: "#500724",
  },
  {
    narmal: "#38bdf8",
    medium: "#0284c7",
    semiColor: "#075985",
    boldColor: "#082f49",
  },
  {
    narmal: "#4ade80",
    medium: "#16a34a",
    semiColor: "#166534",
    boldColor: "#052e16",
  },
  {
    narmal: "#a3e635",
    medium: "#65a30d",
    semiColor: "#3f6212",
    boldColor: "#1a2e05",
  },
  {
    narmal: "#34d399",
    medium: "#059669",
    semiColor: "#115e59",
    boldColor: "#042f2e",
  },
  {
    narmal: "#f87171",
    medium: "#dc2626",
    semiColor: "#991b1b",
    boldColor: "#450a0a",
  },
  {
    narmal: "#a3a3a3",
    medium: "#525252",
    semiColor: "#262626",
    boldColor: "#0a0a0a",
  },
  {
    narmal: "#fb923c",
    medium: "#ea580c",
    semiColor: "#9a3412",
    boldColor: "#431407",
  },
  {
    narmal: "#60a5fa",
    medium: "#2563eb",
    semiColor: "#3730a3",
    boldColor: "#1e1b4b",
  },
  {
    narmal: "#94a3b8",
    medium: "#475569",
    semiColor: "#1e293b",
    boldColor: "#020617",
  },
  {
    narmal: "#fde047",
    medium: "#eab308",
    semiColor: "#854d0e",
    boldColor: "#422006",
  },
];

export default ColorPalettePage;
