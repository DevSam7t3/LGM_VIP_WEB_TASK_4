import React, { useReducer } from "react";
import reducer from "../../state/reducer";
import ButtonGrid from "../ButtonGrid";
import ResultScreen from "../ResultScreen";

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="flex flex-col gap-2">
      <ResultScreen
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operation={operation}
      />
      <ButtonGrid dispatch={dispatch} />
    </div>
  );
};

export default Calculator;
