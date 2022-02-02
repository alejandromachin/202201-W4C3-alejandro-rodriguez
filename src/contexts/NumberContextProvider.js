import { useState } from "react";
import NumberContext from "./NumberContext";

const NumberContextProvider = ({ children }) => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [usedNumbers, setUsedNumbers] = useState([]);

  return (
    <NumberContext.Provider value={(digits, usedNumbers, setUsedNumbers)}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberContextProvider;
