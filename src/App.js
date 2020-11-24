import React, { Component } from 'react'
import './App.css';
import Home from './components/Home'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

class App extends Component {




    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <Home></Home>
                </div>
            </ApolloProvider>
        )

    }
}

export default App;
