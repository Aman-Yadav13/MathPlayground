import React from "react";

const ImageCard = ({ imageSrc }) => {
  return (
    <div className="h-[200px] w-[350px] bg-[#FFF7D0] object-cover border-2 border-slate-600 hover:border-slate-800 transition-all duration-100 hover:border-4  group">
      <img src={imageSrc} alt="Image" className="w-full" />
    </div>
  );
};

export default ImageCard;
