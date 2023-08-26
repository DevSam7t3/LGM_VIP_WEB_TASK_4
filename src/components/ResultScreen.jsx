import React from "react";
import formatOperand from "../lib/format";

const ResultScreen = ({ currentOperand, previousOperand, operation }) => {
  return (
    <div className="w-full max-w-[300px] min-h-[7rem] h-auto rounded-xl bg-black/30 flex flex-col items-end justify-around text-xl px-2">
      <div className="text-white/75 text-2xl">
        {formatOperand(previousOperand)} {operation}
      </div>
      <div className="text-white text-4xl break-all">
        {formatOperand(currentOperand)}
      </div>
    </div>
  );
};

export default ResultScreen;
