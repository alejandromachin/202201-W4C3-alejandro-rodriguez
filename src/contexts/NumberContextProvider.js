import NumberContext from "./NumberContext";

const NumberContextProvider = ({ children }) => {
  return <NumberContext.Provider value="{}">{children}</NumberContext.Provider>;
};

export default NumberContextProvider;
