import ActionButton from "../ActionButton/ActionButton";
import Display from "../Display/Display";
import { useContext } from "react";
import NumberContext from "../../contexts/NumberContext";

const ActionContainer = () => {
  const { hangCall, makeCall } = useContext(NumberContext);

  return (
    <div className="actions">
      <Display />
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
      
          <!-- el número de teléfono tiene 9 cifras --> */}
      <ActionButton text="call" actionOnClick={makeCall} />
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <ActionButton text="hang" actionOnClick={hangCall} />
    </div>
  );
};

export default ActionContainer;
