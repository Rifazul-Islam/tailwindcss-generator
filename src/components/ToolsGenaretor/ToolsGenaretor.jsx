import Link from "next/link";
import React from "react";

const ToolsGenaretor = () => {
  const cards = [
    {
      title: "Card Generator",
      description:
        "Create stunning, customizable cards for your web projects with ease.",
      image: "https://i.ibb.co.com/ZMfPHbh/tailwind-logo.png",
      link: "/card_generator",
      buttonText: "Design Cards",
    },
    {
      title: "Grid Generator",
      description: "Build responsive and flexible grid layouts in minutes.",
      image: "https://i.ibb.co.com/ZMfPHbh/tailwind-logo.png",
      link: "/grid_generator",
      buttonText: "Create Grids",
    },
    {
      title: "Color Palette Generator",
      description: "Discover beautiful color combinations for your designs.",
      image: "https://i.ibb.co.com/ZMfPHbh/tailwind-logo.png",
      link: "/colorPalette",
      buttonText: "Generate Colors",
    },
    {
      title: "Login Form Generator",
      description: "Design sleek and secure login forms with various styles.",
      image: "https://i.ibb.co.com/ZMfPHbh/tailwind-logo.png",
      link: "/signIn_generator",
      buttonText: "Create Login Forms",
    },
    {
      title: "Table Form Generator",
      description: "Design sleek and secure login forms with various styles.",
      image: "https://i.ibb.co.com/ZMfPHbh/tailwind-logo.png",
      link: "/table_generator",
      buttonText: "Create A Table",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl mt-8 font-bold font-sans text-center text-blue-700">
        All Tools Generators
      </h1>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-28 px-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card rounded-lg card-compact bg-base-100 shadow-xl border hover:shadow-2xl transition-shadow duration-300"
          >
            <figure>
              <img
                className=" w-full object-cover"
                src={card.image}
                alt={card.title}
              />
            </figure>
            <div className="card-body bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg">
              <h2 className="card-title text-gray-800">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
              <div className="card-actions justify-end mt-4">
                <Link href={card.link}>
                  <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white border-none">
                    {card.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsGenaretor;
