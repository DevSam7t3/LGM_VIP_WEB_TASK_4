import React from "react";
import ACTION from "../constants";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

const ButtonGrid = ({ dispatch }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <button
        onClick={() => dispatch({ type: ACTION.CLEAR })}
        className="bigButton whiteButton"
      >
        AC
      </button>
      <button
        onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}
        name="del"
        className="normalButton whiteButton"
      >
        DEL
      </button>
      <OperationButton
        operation="/"
        dispatch={dispatch}
        className="normalButton yellowButton"
      />
      <DigitButton digit="7" dispatch={dispatch} className="normalButton" />
      <DigitButton digit="8" dispatch={dispatch} className="normalButton" />
      <DigitButton digit="9" dispatch={dispatch} className="normalButton" />
      <OperationButton
        operation="*"
        dispatch={dispatch}
        className="normalButton yellowButton"
      />
      <DigitButton digit="4" dispatch={dispatch} className="normalButton" />
      <DigitButton digit="5" dispatch={dispatch} className="normalButton" />
      <DigitButton digit="6" dispatch={dispatch} className="normalButton" />
      <OperationButton
        operation="-"
        dispatch={dispatch}
        className="normalButton yellowButton"
      />
      <DigitButton digit="1" dispatch={dispatch} className="normalButton" />
      <DigitButton digit="2" dispatch={dispatch} className="normalButton" />
      <DigitButton digit="3" dispatch={dispatch} className="normalButton" />
      <OperationButton
        operation="+"
        dispatch={dispatch}
        className="normalButton yellowButton"
      />
      <DigitButton digit="0" dispatch={dispatch} className="bigButton" />
      <DigitButton digit="." dispatch={dispatch} className="normalButton" />
      <button
        onClick={() => dispatch({ type: ACTION.EVALUATE })}
        className="bigButton yellowButton"
      >
        =
      </button>
    </div>
  );
};

export default ButtonGrid;
