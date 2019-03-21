import React, { Component } from 'react'
//import logo from './logo.svg'
import './styles/index.css'
import Stardust from './components/Dashboard'

          //<img src={logo} className="App-logo" alt="logo" />
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Stardust />
        </header>
      </div>
    );
  }
}

export default App;
