import NumberContext from "../../contexts/NumberContext";
import DeleteKey from "../DeleteKey/DeleteKey";
import Key from "../Key/Key";
import { useContext } from "react";

const Keyboard = () => {
  const { digits } = useContext(NumberContext);

  return (
    <ol className="keyboard">
      {digits.map((digit) => (
        <Key key={digit} digit={digit} />
      ))}
      <DeleteKey />
    </ol>
  );
};
export default Keyboard;
