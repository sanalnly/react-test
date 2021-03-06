import React,{Component} from 'react';
import { BarChart } from 'react-charts-d3';
import {Link} from 'react-router-dom';
import './Graph1.css';


class Graph1 extends Component {
    
    
 constructor(props) {
    super(props);
    this.state = {
	     data : [
  { key: 'Group 1', values: [ { x: 'A', y: 23 }, { x: 'B', y: 8 } ] },
  { key: 'Group 2', values: [ { x: 'A', y: 15 }, { x: 'B', y: 37 } ] },
                ]
	    
	    };
     }
    
    
  render(){  
  return (
    <div>
	  <div className="back-button">
	  <Link className="App-link" to="/">Back</Link>
      </div>
	  <div className="container">
           <BarChart data={this.state.data} />
	  </div>
	  
    </div>
  );
  }
}

export default Graph1;
