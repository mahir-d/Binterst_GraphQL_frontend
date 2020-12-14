import React, { Component } from 'react'
import './App.css';
import Home from './components/Home'
import MyPosts from './components/MyPosts'
import MyBin from './components/MyBin'
import Popularity from './components/Populartiy';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import NavBar from './components/NavBar'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

class App extends Component {




    render() {
        return (
            <Router>
                <ApolloProvider client={client}>
                    {<NavBar></NavBar>}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/popularity">
                            <Popularity></Popularity>
                        </Route>
                        <Route path="/my-bin">
                            <MyBin></MyBin>
                        </Route>
                        <Route path="/my-posts">
                            <MyPosts></MyPosts>
                        </Route>
                        <Route path="/new-post">
                            <div><p>new-post</p></div>
                        </Route>
                    </Switch>

                </ApolloProvider>
            </Router>
        )

    }
}

export default App;
