import React, { Component } from 'react';
import Cheers from './components/cheers';
import './App.css';
import cheersData from './cheers.json';

class App extends Component {
    state = {
        active: 0,
        cheers: cheersData,
        images: [
            'img/background0.png',
            'img/background1.png',
            'img/background2.png',
            'img/background3.png',
            'img/background4.png'
            ]
    };

    render() {
        return (
	    <React.Fragment>
                <Cheers
                  active={this.state.active}
                  cheers={this.state.cheers}
                  images={this.state.images}
                />
            </React.Fragment>
        );
    }
}

export default App;
