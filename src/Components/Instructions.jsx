function Instructions({ instructions }) {
  return (
    <div className="flex justify-end mr-8">
      <div className="max-w-[500px] w-auto ml-12 h-[400px] self-center mb-20 bg-fuchsia-100 rounded-lg px-8 py-4 border border-teal-700">
        <h1 className="text-4xl text-teal-600 font-semibold text-center">
          Instructions
        </h1>
        <div className="flex flex-col items-start gap-2 text-teal-600 mt-4">
          {instructions?.map((instruction, i) => (
            <div key={i}>
              <p className="text-xl">{instruction}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instructions;
