import DeleteKey from "../DeleteKey/DeleteKey";
import Key from "../Key/Key";

const Keyboard = () => {
  return (
    <ol className="keyboard">
      <Key />
      <DeleteKey />
    </ol>
  );
};
export default Keyboard;
