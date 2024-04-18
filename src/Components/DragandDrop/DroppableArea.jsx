import React from "react";
import ImageCard from "../NumberMatching/ImageCard";

const DroppableArea = ({ onDrop, onDragOver, imageurl }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    onDrop(data);
  };

  return (
    <div onDrop={handleDrop} onDragOver={onDragOver}>
      <ImageCard imageSrc={imageurl} />
    </div>
  );
};

export default DroppableArea;
