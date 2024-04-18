import React, { useState } from "react";
import parisImage from "./paris.jpg";
import berlinImage from "./berlin.jpeg";
import londonImage from "./london.jpeg";
import romeImage from "./rome.jpeg";

import lionImage from "./lion.jpeg";
import p6 from "./elephant.jpeg";
import p7 from "./tiger.jpeg";
import p8 from "./giraffe.jpeg";

import p9 from "./earth.jpeg";
import p10 from "./mars.jpeg";
import jupiterImage from "./jupiter.jpeg";
import p12 from "./saturn.jpeg";

import monalisaImage from "./monalisa.jpeg";
import p14 from "./vangogh.jpeg";
import p15 from "./picasso.jpeg";
import p16 from "./michelangelo.jpeg";
import { useNavigate } from "react-router-dom";
import Instructions from "../Instructions";
import Footer from "../footer";

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { image: parisImage, name: "Paris" },
      { image: londonImage, name: "London" },
      { image: berlinImage, name: "Berlin" },
      { image: romeImage, name: "Rome" },
    ],
    answer: parisImage,
  },
  {
    question: 'Which animal is known as the "King of the Jungle"?',
    options: [
      { image: lionImage, name: "Lion" },
      { image: [p6], name: "Elephant" },
      { image: [p7], name: "Tiger" },
      { image: [p8], name: "Giraffe" },
    ],
    answer: lionImage,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { image: [p9], name: "Earth" },
      { image: [p10], name: "Mars" },
      { image: jupiterImage, name: "Jupiter" },
      { image: [p12], name: "Saturn" },
    ],
    answer: jupiterImage,
  },

  {
    question: "Who painted the Mona Lisa?",
    options: [
      { image: monalisaImage, name: "Leonardo da Vinci" },
      { image: [p14], name: "Vincent van Gogh" },
      { image: [p15], name: "Pablo Picasso" },
      { image: [p16], name: "Michelangelo" },
    ],
    answer: monalisaImage,
  },
];

const quizinstructions = [
  "Step 1:- A question will appear on the screen. Read the question carefully to understand what is being asked.",
  "Step 2:- Select the correct answer from the options provided below the question.",
  "Step 3:- Click or tap on the 'Submit' button after choosing your answer.",
  "Step 4:- After submitting your answer, you will see if you got it right or wrong.",
  "Correct Answer: You'll earn points and move on to the next question.",
  "Wrong Answer: Don't worry, you can try again!",
  "Step 5:- For each correct answer, you will earn points.",
  "Step 6:- Keep answering questions and score well!",
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswered, setUserAnswered] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onHome = () => {
    setOpen(false);
    navigate("/");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionSelect = (option) => {
    if (!userAnswered) {
      setSelectedOption(option);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswered(true);
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption("");
        setUserAnswered(false);
      }, 1000);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="bg-fuchsia-700 h-auto w-full py-8 px-16">
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          {showScore ? (
            <div
              onClick={handleClose}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
              }}
            >
              <div
                style={{
                  margin: "auto",
                  padding: "2%",
                  border: "2px solid #000",
                  borderRadius: "10px",
                  boxShadow: "2px solid black",
                }}
                className="bg-slate-400 h-[150px] w-[600px]"
              >
                <div className="h-full w-full relative">
                  <p className="text-2xl">
                    You have scored {score} out of {questions.length}!
                  </p>
                  <p className="text-2xl">Keep learning</p>
                  <button
                    onClick={onHome}
                    className="text-white hover:bg-teal-600 bg-teal-500 transition-all rounded-md font-semibold px-2 py-1 self-center absolute -bottom-4 right-0"
                  >
                    Home
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <div style={{ marginBottom: "20px" }} className="text-white">
                <h1 className="text-5xl mb-8 font-semibold">Quiz</h1>
                <div>
                  <div>
                    <h2 className="text-3xl font-semibold">
                      Question {currentQuestion + 1}
                    </h2>
                    <div style={{ fontSize: "20px", marginBottom: "10px" }}>
                      {questions[currentQuestion].question}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                      className="mt-4"
                    >
                      {questions[currentQuestion].options.map(
                        (option, index) => (
                          <button
                            key={index}
                            style={{
                              margin: "10px",
                              padding: "0",
                              border: "none",
                              background: "none",
                              cursor: "pointer",
                            }}
                            className={
                              selectedOption === option.image ? "selected" : ""
                            }
                            onClick={() => handleOptionSelect(option.image)}
                          >
                            <img
                              src={option.image}
                              alt={option.name}
                              style={{
                                width: "175px",
                                height: "175px",
                                borderRadius: "10px",
                                transition: "transform 0.3s ease",
                                transform:
                                  selectedOption === option.image
                                    ? "scale(1.1)"
                                    : "scale(1)",
                              }}
                            />
                            <div
                              style={{ marginTop: "5px" }}
                              className="text-lg"
                            >
                              {option.name}
                            </div>
                          </button>
                        )
                      )}
                    </div>
                    {selectedOption && (
                      <button
                        className="bg-teal-600 rounded-lg font-semibold border border-teal-700 hover:bg-teal-700 hover:border-teal-800 transition-all duration-100"
                        style={{
                          marginTop: "20px",
                          padding: "10px 20px",
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                        onClick={handleNextQuestion}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mr-8">
                <div className="w-[1200px] ml-12 h-[400px] self-center mb-20 bg-fuchsia-100 rounded-lg px-8 py-4 border border-teal-700">
                  <h1 className="text-4xl text-teal-600 font-semibold text-center">
                    Instructions
                  </h1>
                  <div className="flex flex-col items-start gap-2 text-teal-600 mt-4">
                    {quizinstructions?.map((instruction, i) => (
                      <div key={i}>
                        <p className="text-xl">{instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
