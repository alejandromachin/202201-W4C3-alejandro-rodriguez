import { useState } from "react";
import NumberContext from "./NumberContext";

const NumberContextProvider = ({ children }) => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [usedNumbers, setUsedNumbers] = useState([]);
  const [isHang, setIsHang] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  const [hangButton, setHangButton] = useState("");
  const [callButton, setCallButton] = useState("active");

  const makeCall = () => {
    setIsCalling(false);
    setIsHang(true);
    setCallButton(callButton);
  };

  const hangCall = () => {
    setIsHang(true);
    setIsCalling(true);
    setHangButton(hangButton);
  };

  return (
    <NumberContext.Provider
      value={{
        digits,
        usedNumbers,
        setUsedNumbers,
        hangCall,
        makeCall,
        isHang,
        isCalling,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export default NumberContextProvider;
