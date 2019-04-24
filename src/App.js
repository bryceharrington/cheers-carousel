import React, { Component } from 'react';
import Cheers from './components/cheers';
import './App.css';
import cheersData from './cheers.json';

class App extends Component {
    state = {
        active: 0,
        cheers: []
    };

    render() {
        if (this.state.cheers.length === 0) {
            fetch('http://alpha.inkscape.org/cheers/cheers.json')
                .then(response => response.json())
                .then((cheersDataCurrent) => {
                    this.setState({cheers: cheersDataCurrent});
                })
                .catch((error) => {
                    console.error(error)
                    this.setState({cheers: cheersData});
                })
        }

        return (
	    <React.Fragment>
                <Cheers
                  active={this.state.active}
                  cheers={this.state.cheers}
                />
            </React.Fragment>
        );
    }
}

export default App;
