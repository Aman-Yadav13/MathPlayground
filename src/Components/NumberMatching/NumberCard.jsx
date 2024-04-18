import React from "react";

const NumberCard = ({ number, onDragStart }) => {
  return (
    <div
      className="bg-[#FFF7D0] h-[250px] w-[150px] flex items-center justify-center border-2 border-slate-600 hover:border-slate-800 transition-all duration-100 hover:border-4  group"
      draggable
      onDragStart={onDragStart}
    >
      <p className="text-7xl text-black group-hover:opacity-100 opacity-60">
        {number}
      </p>
    </div>
  );
};

export default NumberCard;
