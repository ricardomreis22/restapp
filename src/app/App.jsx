"use client";
import React, { useState } from "react";
import RestaurantTable from "./components/RestaurantTable";
import Table from "./components/Table";

const App = () => {
  const tableCap = 2;
  const openTable = () => {
    setTableOpen(true);
  };

  const closeTable = () => {
    setTableOpen(false);
  };

  const [tableOpen, setTableOpen] = useState(false);

  if (tableOpen === true) {
    return <Table onClick={closeTable} />;
  }

  return (
    <div className="bg-gray-100 flex flex-wrap justify-center items-center h-screen">
      <RestaurantTable
        tableNumber={1}
        initialCapacity={tableCap}
        status="Available"
        onClick={openTable}
      />
      <RestaurantTable
        tableNumber={2}
        initialCapacity={tableCap}
        status="Reserved"
      />
      <RestaurantTable
        tableNumber={3}
        initialCapacity={tableCap}
        status="Occupied"
      />
    </div>
  );
};

export default App;
