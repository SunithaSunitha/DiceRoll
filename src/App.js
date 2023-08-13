import React, { Component } from 'react'
import './App.css';
// import Die from './Die';
import RollDice from './RollDice'

class App extends Component {
  render() {
    return (
        <div className='App'>
          <RollDice/>
          {/* <Die face='three'/>
          <Die face='two'/>
          <Die face='one'/>
          <Die face='five'/> */}
        </div>
    );
  }
}

export default App;
