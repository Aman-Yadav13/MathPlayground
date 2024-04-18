import React, { useEffect, useState } from "react";
import NumberCard from "./NumberCard";
import DroppableArea from "../DragandDrop/DroppableArea";
import Modal from "../Modal";
import Instructions from "../Instructions";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";

const MatchingGame = () => {
  const [draggedNumber, setDraggedNumber] = useState(null);
  const navigate = useNavigate("/");
  const [status, setStatus] = useState(false);
  const [currentImageNumber, setCurrentImageNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const matchinginstructions = [
    "Step 1:-Look at the images displayed on the screen. Each image shows a different number of fruits.",
    "Step 2:- Drag the numbers (1, 2, 3, etc.) to the images with the same number of fruits. Place each number next to the correct image.",
    "Step 3:-  To pass each level, make sure all the numbers are correctly matched with the images before moving on.",
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onHome = () => {
    setOpen(false);
    navigate("/");
  };

  const appreciation = [
    "Nice one!",
    "Keep going!",
    "You are doing well!",
    "Great, one last to go!",
  ];

  const handleDragStart = (number) => {
    setDraggedNumber(number);
  };

  const handleDrop = (imageNumber) => {
    if (draggedNumber === imageNumber && currentImageNumber < 4) {
      setStatus(true);
      setCurrentImageNumber(currentImageNumber + 1);
      return;
    }
    if (draggedNumber === imageNumber && currentImageNumber == 4) {
      setOpen(true);
      setStatus(true);
      setCurrentImageNumber(currentImageNumber + 1);
      return;
    }
    setStatus(false);
    setDraggedNumber(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const renderNumberCards = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <NumberCard
        key={index}
        number={index + 1}
        onDragStart={() => handleDragStart(index + 1)}
      />
    ));
  };
  const imageUrls = [
    "/assets/numbermatching/1-banana.png",
    "/assets/numbermatching/4-oranges.png",
    "/assets/numbermatching/2-lemons.png",
    "/assets/numbermatching/5-apple.png",
    "/assets/numbermatching/3-pomo.png",
  ];
  const mappedUrls = {
    "/assets/numbermatching/1-banana.png": 1,
    "/assets/numbermatching/4-oranges.png": 4,
    "/assets/numbermatching/2-lemons.png": 2,
    "/assets/numbermatching/5-apple.png": 5,
    "/assets/numbermatching/3-pomo.png": 3,
  };
  const renderImageCard = () => {
    if (currentImageNumber >= 5) {
      return null;
    }
    return (
      <DroppableArea
        imageurl={imageUrls[currentImageNumber]}
        onDrop={() => handleDrop(mappedUrls[imageUrls[currentImageNumber]])}
        onDragOver={handleDragOver}
      ></DroppableArea>
    );
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <div className="h-full w-full relative">
          <p className="text-2xl">
            You have successfully completed the game! Congratulations.
          </p>
          <button
            onClick={onHome}
            className="text-white hover:bg-teal-600 bg-teal-500 transition-all rounded-md font-semibold px-2 py-1 self-center absolute -bottom-4 right-0"
          >
            Home
          </button>
        </div>
      </Modal>
      <div className="h-full w-full bg-fuchsia-700 py-8">
        <h1 className="text-5xl text-white self-center text-center font-semibold">
          Number Matching
        </h1>
        <div className="mt-12 grid grid-cols-2">
          <div className="ml-4">
            <div className="flex items-center gap-4 justify-start">
              {renderNumberCards()}
            </div>
            <div className="mt-12">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {renderImageCard()}
              </div>
            </div>
            <div className="mt-12">
              <p className="text-2xl text-white font-semibold text-center">
                {status
                  ? appreciation[currentImageNumber - 1]
                  : "Match the correct number"}
              </p>
            </div>
          </div>
          <div className="col-span-1 px-16">
            <Instructions instructions={matchinginstructions} />
            <div className="mt-2">
              <p className="text-3xl text-white font-bold">Progress:</p>
              <p className="text-2xl text-slate-200 font-semibold">
                {(currentImageNumber / 5) * 100}% completed
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MatchingGame;
