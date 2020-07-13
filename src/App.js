import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Graph1 from './pages/Graph1';
import Graph2 from './pages/Graph2';

function App() {
  return (
     
	  <BrowserRouter>   
    
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/graph1" component={Graph1} />
          <Route path="/graph2" component={Graph2} />
      </Switch>
      
    </BrowserRouter>
	  
  );
}

export default App;
