import React from "react";
import { useState } from "react";
import Image from "next/image";

const Menu = () => {
  const images = [
    { src: "/softdrinks.jpg", name: "softdrinks" },
    { src: "/softdrinks.jpg", name: "hotdrinks" },
    { src: "/softdrinks.jpg", name: "beers" },
  ];

  const changeOptions = () => {
    console.log("x");
  };

  return (
    <div className="menugroups flex gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="image-container"
          onMouseEnter={() => setHoveredImage(image.name)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={changeOptions}
        >
          <h1>{image.name}</h1>
          <Image
            src="/softdrinks.jpg"
            width={100}
            height={100}
            alt="softdrinks"
            className=" group-hover:opacity-50 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
};

// menugroups img, onClick, change the items on the table, and name on hover
export default Menu;
