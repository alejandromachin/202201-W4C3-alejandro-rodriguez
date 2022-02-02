import ActionContainer from "./components/ActionContainer/ActionContainer";
import Keyboard from "./components/Keyboard/Keboard";

function App() {
  return (
    <div className="container">
      {/* El siguiente elemento se oculta añadiéndole la clase "off" */}
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
        <ActionContainer />
      </main>
    </div>
  );
}

export default App;
