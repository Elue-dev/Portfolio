import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ModeContext } from "./contexts/ModeContext";
import Homepage from "./pages/Homepage";

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
