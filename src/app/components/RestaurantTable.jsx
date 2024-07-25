"use client";
import React from "react";

const RestaurantTable = ({ status, tableNumber, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="restaurant-table bg-white shadow-lg rounded-lg p-4 m-4 w-32 h-32 flex flex-col justify-center items-center"
    >
      <div className="table-number text-xl font-bold">{tableNumber}</div>
      <div className="table-status bg-green-500 text-white text-sm px-2 py-1 rounded mt-2">
        {status}
      </div>
    </div>
  );
};

export default RestaurantTable;
