import './App.css';
import Header from './components/Header';
import data from './data';
import { Route, Redirect } from 'react-router-dom';
///import usePlanet from './hooks/usePlanet';
//import Planet from './interfaces/planet';
import { useState } from 'react';
import Tabs from './components/Tabs';

function App() {
  const [tab, setTab] = useState(0);
  //const planet: Planet = usePlanet();

  return (
    <div className="App">
        <Route exact path="/">
          <Redirect to="/mercury"/>
        </Route>

        <Header data={data}/>
        <div className="grid">
          <Tabs tab={tab} setTab={setTab}/>
        </div>
    </div>
  );
}

export default App;
