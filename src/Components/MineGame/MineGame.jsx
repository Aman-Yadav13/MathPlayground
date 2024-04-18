import React, { useState, useEffect } from "react";
import Footer from "../footer";

const images = [
  "🍎",
  "🍎",
  "🍌",
  "🍌",
  "🍒",
  "🍒",
  "🍇",
  "🍇",
  "🥕",
  "🥕",
  "🥑",
  "🥑",
  "🥭",
  "🥭",
  "🍓",
  "🍓",
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const mineinstructions = [
  "Step 1:-Look at the images displayed on the screen. Each image hides a fruit behind it.",
  "Step 2:- Click on two images one by one to reveal the fruits behind them. Remember which fruit is behind each image!",
  "Step 3:- If the two images reveal the same fruit, you've found a match! Great job!",
  "Step 4:- If the two images reveal different fruits, they will disappear. Try to remember where they were for the next turn!",
  "Step 5:- To pass each level, you need to match all the pairs of fruits without making a mistake.",
];

const MineGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    const shuffledImages = shuffleArray(images);
    setCards(shuffledImages.map((image, index) => ({ id: index, image })));
  }, []);

  const handleCardClick = (id) => {
    if (flipped.length === 2 || solved.includes(id)) return;

    setFlipped([...flipped, id]);

    if (flipped.length === 1) {
      setTimeout(() => {
        const [firstCard, secondCard] = flipped;
        if (cards[firstCard].image === cards[id].image) {
          setSolved([...solved, firstCard, id]);
        }
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <>
      <div className="py-8 px-16 bg-fuchsia-700 h-auto w-full">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className="text-5xl text-center text-white">
            Emoji Memory Match: Can You Find the Pairs?
          </h1>
          <div
            className="mt-20"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "30px",
                  border: "1px solid #000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "36px",
                  backgroundColor:
                    flipped.includes(card.id) || solved.includes(card.id)
                      ? "#14B8A6"
                      : "#0F7676",
                  visibility: solved.includes(card.id) ? "hidden" : "visible",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s ease-in-out",
                  transform: flipped.includes(card.id)
                    ? "scale(1.1)"
                    : "scale(1)",
                }}
              >
                {flipped.includes(card.id) || solved.includes(card.id)
                  ? card.image
                  : ""}
              </div>
            ))}
          </div>
          <div className="flex justify-end mr-8">
            <div className="w-[1200px] ml-12 h-auto self-center mb-20 bg-fuchsia-100 rounded-lg px-8 py-4 border border-teal-700">
              <h1 className="text-4xl text-teal-600 font-semibold text-center">
                Instructions
              </h1>
              <div className="flex flex-col items-start gap-2 text-teal-600 mt-4">
                {mineinstructions?.map((instruction, i) => (
                  <div key={i}>
                    <p className="text-xl">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MineGame;
