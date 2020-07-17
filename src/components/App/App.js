import React, { Component } from 'react'
import Header from '../elements/Header/Header';
import Home from '../Home/Home';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
            </div>
        )
    }
}
