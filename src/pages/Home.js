import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';


class Home extends Component {
    
    
 
    
    
  render(){  
  return (
    
	  <div className="App">
      <header className="App-header">
        <p>
          D3 Graphs
        </p>
        <Link className="App-link" to="/graph1">Graph 1</Link>
	    <Link className="App-link" to="/graph2">Graph 2</Link>
      </header>
    </div>
	  
	  
  );
  }
}

export default Home;
