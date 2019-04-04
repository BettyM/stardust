import React, { Component } from 'react'
import './styles/index.css'
import Stardust from './components/Dashboard'

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
