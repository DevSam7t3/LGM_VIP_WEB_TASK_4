import React from "react";
import ACTION from "../constants";

const OperationButton = ({
  dispatch,
  operation,
  className = "normalButton yellowButton",
}) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation } })
      }
      className={className}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
