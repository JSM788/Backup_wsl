import React from "react";
import Trash from "../svgComponents/Trash";

const ItemCart = () => {
  return (
    <div className="flex border-b py-3">
      <img
        className="w-[7rem] h-[4.5rem] rounded-2xl"
        src="https://blog.tiendasishop.com/wp-content/uploads/2022/07/productos-tecnologicos-2.webp"
        alt=""
      />
      <div className="px-4 grow flex flex-col justify-between">
        <p className="font-bold">Lorem ipsum</p>
        <p>$0.00</p>
        <div className="flex w-full justify-between items-center">
          <div className="flex">
            <button className="w-4 h-4 border border-black rounded-sm place-content: center">
              -
            </button>
            <span className="px-1 ">0</span>
            <button className="w-4 h-4 border border-black rounded-sm place-content: center">
              +
            </button>
          </div>
          <a href="#">
            <Trash />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
