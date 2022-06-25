import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
