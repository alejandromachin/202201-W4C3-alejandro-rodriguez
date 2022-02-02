import ActionButton from "../ActionButton/ActionButton";
import Display from "../Display/Display";

const ActionContainer = () => {
  return (
    <div className="actions">
      <Display />
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número de teléfono tiene 9 cifras --> */}
      <ActionButton />
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a href="hang" className="hang active">
        Hang
      </a>
    </div>
  );
};

export default ActionContainer;
