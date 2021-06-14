import './App.css';
import Header from './components/Header';
import data from './data';
import { Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Tabs from './components/Tabs';
import Graphics from './components/Graphics';

function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="App">
        <Route exact path="/">
          <Redirect to="/mercury"/>
        </Route>

        <Header data={data}/>
        <div className="grid">
          <Tabs tab={tab} setTab={setTab}/>
          <Graphics tab={tab} />
        </div>
    </div>
  );
}

export default App;
