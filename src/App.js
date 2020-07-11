import React,{Component} from 'react';
import Counter from './components/counter.js'
import Hover from './components/hover.js'
import './App.css';

class App extends Component
{
  render()
  {
    return (
      <div>
        <Counter/>
        <Hover/>
      </div>
    )
  }
}

export default App;
