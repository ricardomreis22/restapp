import React from "react";
import Menu from "./Menu";
import TableOrder from "./TableOrder";
import MenuItems from "./MenuItems";

const Table = ({ onClick }) => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="h-[10%] bg-gray-400">
        <button onClick={onClick}>Close Table</button>
      </div>
      <div className="middle flex h-[70%]">
        <div className="left w-[60%]  bg-green-300">
          <MenuItems />
        </div>
        <div className="right w-[40%] h-full bg-yellow-300">
          <TableOrder />
        </div>
      </div>
      <div className="bottom h-[10%]">
        <Menu />
      </div>
    </div>
  );
};

export default Table;
