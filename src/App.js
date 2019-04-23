import React, { Component } from 'react';
import Cheers from './components/cheers';
import './App.css';

class App extends Component {
    state = {
        active: 0,
        cheers: [],
        images: [
            'img/background0.png',
            'img/background1.png',
            'img/background2.png',
            'img/background3.png',
            'img/background4.png'
            ]
    };

    render() {
        if (this.state.cheers.length === 0) {
            fetch('http://alpha.inkscape.org/cheers/cheers.json')
                .then(response => response.json())
                .then((cheersData) => {
                    this.setState({cheers: cheersData});
                })
                .catch((error) => {
                    console.error(error)
                })
        }

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
