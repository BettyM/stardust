import React, { Component } from 'react'
import { ApolloProvider } from "react-apollo"
//import ApolloClient from 'apollo-boost'
import client from './apollo'
import './styles/index.css'
import Stardust from './components/Dashboard'

/*
const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza"
})
*/

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
