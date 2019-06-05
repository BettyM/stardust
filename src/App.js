import React, { Component } from 'react'
import './styles/index.css'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'
import Stardust from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Stardust />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
