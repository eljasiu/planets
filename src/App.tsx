import './App.css';
import Header from './components/Header';
import data from './data';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header data={data}/>
      </Router>
    </div>
  );
}

export default App;
