import React from "react";
import ACTION from "../constants";

const DigitButton = ({ dispatch, digit, isYellow = false }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit } })}
      className="normalButton"
    >
      {digit}
    </button>
  );
};

export default DigitButton;
