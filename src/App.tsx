import './App.css';
import Header from './components/Header';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header data={data}/>
    </div>
  );
}

export default App;
