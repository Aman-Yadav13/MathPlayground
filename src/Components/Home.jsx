function Home() {
  return (
    <div className="h-full w-full relative">
      <div className="flex items-center justify-center bg-fuchsia-700 text-white h-[350px] w-full">
        <p className="text-5xl font-semibold max-w-[700px] text-center select-none">
          Free and fun digital education for all children worldwide
        </p>
      </div>

      <div
        className="flex items-center justify-center bg-white h-[450px] w-full"
        id="games"
      >
        <div className="flex items-center justify-center gap-12">
          <a
            href="/number-matching"
            class="cursor-pointer h-[270px] w-[270px] rounded-full  border-2 border-slate-400 hover:border-slate-600 transition-all hover:border-4 duration-100 shadow-xl relative"
          >
            <img
              src="/assets/numbermatching/logo.jpeg"
              alt="game1"
              class="object-cover w-full h-full rounded-full"
            />
            <div className="absolute -bottom-4 left-8 bg-teal-600 w-[200px] h-[50px] bg-opacity-75 z-100 px-4 rounded-md text-white flex items-center justify-center">
              <p className="text-xl font-semibold">Number Matching</p>
            </div>
          </a>
          <a
            href="/quiz-game"
            class="cursor-pointer h-[270px] w-[270px] rounded-full  border-2 border-slate-400 hover:border-slate-600 transition-all hover:border-4 duration-100 shadow-xl relative"
          >
            <img
              src="/assets/quizlogo.png"
              alt="game1"
              class="object-cover w-full h-full rounded-full"
            />
            <div className="absolute -bottom-4 left-8 bg-teal-600 w-[200px] h-[50px] bg-opacity-75 z-100 px-4 rounded-md text-white flex items-center justify-center">
              <p className="text-xl font-semibold">Quiz game</p>
            </div>
          </a>
          <a
            href="/addition-game"
            class="cursor-pointer h-[270px] w-[270px] rounded-full border-2 border-slate-400 hover:border-slate-600 transition-all hover:border-4 duration-100 shadow-xl relative"
          >
            <img
              src="/assets/additiongame/addition-game-logo.png"
              alt="game2"
              class="object-cover w-full h-full rounded-full"
            />
            <div className="absolute -bottom-4 left-8 bg-teal-600 w-[200px] h-[50px] bg-opacity-75 z-100 px-4 rounded-md text-white flex items-center justify-center">
              <p className="text-xl font-semibold">Add NumFruit</p>
            </div>
          </a>
          <a
            href="/mine-game"
            class="cursor-pointer h-[270px] w-[270px] rounded-full border-2 border-slate-400 hover:border-slate-600 transition-all hover:border-4 duration-100 shadow-xl relative"
          >
            <img
              src="/pairfruitlogo.jpeg"
              alt="game3"
              class="object-cover w-full h-full rounded-full"
            />
            <div className="absolute -bottom-4 left-8 bg-teal-600 w-[200px] h-[50px] bg-opacity-75 z-100 px-4 rounded-md text-white flex items-center justify-center">
              <p className="text-xl font-semibold">Fruit Pair</p>
            </div>
          </a>
        </div>
      </div>
      <div className="absolute -bottom-10 w-full h-[40px] bg-gray-800 flex items-center">
        <div className="flex items-center space-between px-4 w-full relative">
          <p className="text-slate-300">Copyright@2024</p>
          <p className="text-slate-300 absolute right-6">
            Learning Platform created by Aman Yadav
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
