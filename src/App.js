import logo from './logo.svg';
import './App.css';
import { FocusScreen } from './FocusScreen';
import { Memorize } from './hooks/Memorize';
import './intro/introreducer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FocusScreen></FocusScreen>

        <Memorize></Memorize>
      </header>
    </div>
  );
}

export default App;
