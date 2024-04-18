import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Instructions from "../Instructions";
import Footer from "../footer";

function AdditionGame() {
  const [numberList, setNumberList] = useState([]);
  const [open, setOpen] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const navigate = useNavigate();

  const additioninstructions = [
    "Step 1:- Look at the number displayed on the screen.",
    "Step 2:- Count the number of items displayed in the image.",
    "Step 3:- Add the two numbers.",
    "Step 4:- Complete all the levels.",
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

  const fruitList = [
    "/assets/additiongame/3cam.png",
    "/assets/additiongame/4crab.png",
    "/assets/additiongame/watermelon.png",
    "/assets/additiongame/5candy.png",
  ];

  const generateRandomNumbersList = () => {
    const numlist = [];
    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      numlist.push(randomNumber);
    }
    setNumberList(numlist);
  };

  useEffect(() => {
    generateRandomNumbersList();
  }, []);

  const handleSubmit = () => {
    let correct = 0;
    console.log(num1);
    console.log(3 + numberList[0]);
    if (Number(num1) === Number(3 + numberList[0])) {
      correct += 1;
    }
    if (Number(num2) === Number(4 + numberList[1])) {
      correct += 1;
    }
    if (Number(num3) === Number(2 + numberList[2])) {
      correct += 1;
    }
    if (Number(num4) === Number(5 + numberList[3])) {
      correct += 1;
    }

    if (correct === 4) {
      setOpen(true);
    }
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
      <div className="h-full w-full bg-fuchsia-200 py-4 px-16">
        <h1 className="text-5xl text-teal-900 self-center text-center font-semibold">
          Counting Game
        </h1>
        <div className="mt-8 grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="flex px-4 py-2 items-center justify-center gap-8">
              <div className="rounded-full bg-teal-700 text-white flex items-center justify-center h-[120px] w-[120px] self-center">
                <p className="text-4xl font-semibold">{numberList[0]}</p>
              </div>
              <div className="rounded-full h-[120px] w-[120px] flex items-center justify-center self-center">
                <p className="text-7xl font-semibold">+</p>
              </div>
              <div className="h-[100px] w-[100px] self-center">
                <img src={fruitList[0]} alt="Fruit" />
              </div>
              <div className="rounded-full h-[120px] w-[120px] flex items-center justify-center self-center">
                <p className="text-7xl font-semibold">=</p>
              </div>
              <input
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="appearance-none h-[120px] w-[120px] border-2 border-slate-400 bg-fuchsia-100 outline-none flex items-center justify-center text-4xl text-center "
              />
            </div>
            <div className="flex px-4 py-2 items-center justify-center gap-8">
              <div className="rounded-full bg-teal-700 text-white flex items-center justify-center h-[120px] w-[120px] self-center">
                <p className="text-4xl font-semibold">{numberList[1]}</p>
              </div>
              <div className="rounded-full h-[120px] w-[120px] flex items-center justify-center self-center">
                <p className="text-7xl font-semibold">+</p>
              </div>
              <div className="h-[100px] w-[100px] self-center">
                <img src={fruitList[1]} alt="Fruit" />
              </div>
              <div className="rounded-full h-[120px] w-[120px] flex items-center justify-center self-center">
                <p className="text-7xl font-semibold">=</p>
              </div>
              <input
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="appearance-none h-[120px] w-[120px] border-2 border-slate-400 bg-fuchsia-100 outline-none flex items-center justify-center text-4xl text-center"
              />
            </div>
            <div className="flex px-4 py-2 items-center justify-center gap-8">
              <div className="rounded-full bg-teal-700 text-white flex items-center justify-center h-[120px] w-[120px] self-center">
                <p className="text-4xl font-semibold">{numberList[2]}</p>
              </div>
              <div className="rounded-full h-[120px] w-[120px] flex items-center justify-center self-center">
                <p className="text-7xl font-semibold">+</p>
              </div>
              <div className="h-[100px] w-[100px] self-center">
                <img src={fruitList[2]} alt="Fruit" />
              </div>
              <div className="rounded-full h-[120px] w-[120px] flex items-center justify-center self-center">
                <p className="text-7xl font-semibold">=</p>
              </div>
              <input
                value={num3}
                onChange={(e) => setNum3(e.target.value)}
                className="appearance-none h-[120px] w-[120px] border-2 border-slate-400 bg-fuchsia-100 outline-none flex items-center justify-center text-4xl text-center"
              />
            </div>
            <div className="flex px-4 py-2 items-center justify-center gap-8">
              <div className="rounded-full bg-teal-700 text-white flex items-center justify-center h-[120px] w-[120px] self-center">
                <p className="text-4xl font-semibold">{numberList[3]}</p>
              </div>
              <div className="rounded-full h-[120px] w-[120px] flex items-center justify-center self-center">
                <p className="text-7xl font-semibold">+</p>
              </div>
              <div className="h-[100px] w-[100px] self-center">
                <img src={fruitList[3]} alt="Fruit" />
              </div>
              <div className="rounded-full h-[120px] w-[120px] flex items-center justify-center self-center">
                <p className="text-7xl font-semibold">=</p>
              </div>
              <input
                className="appearance-none h-[120px] w-[120px] border-2 border-slate-400 bg-fuchsia-100 outline-none flex items-center justify-center text-4xl text-center"
                value={num4}
                onChange={(e) => setNum4(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="mt-8 bg-blue-500 text-white py-2 text-2xl px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
          <Instructions instructions={additioninstructions} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdditionGame;
