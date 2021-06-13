import './App.css';
import Header from './components/Header';
import data from './data';
import { Route, Redirect } from 'react-router-dom';
import usePlanet from './hooks/usePlanet';
import Planet from './interfaces/planet';

function App() {
  const planet: Planet = usePlanet();

  return (
    <div className="App">
        <Route exact path="/">
          <Redirect to="/mercury"/>
        </Route>

        <Header data={data}/>
    </div>
  );
}

export default App;
