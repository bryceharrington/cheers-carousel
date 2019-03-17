import React, { Component } from 'react';
import Cheers from './components/cheers';
import './App.css';

class App extends Component {
    state = {
        active: 0,
        cheers: [
            { id: 0, memo: "Thanks!", year: 2019, month: 1 },
            { id: 1, memo: "Good work!", year: 2019, month: 2 },
            { id: 2, memo: "Keep it up!", year: 2019, month: 3 },
            { id: 3, memo: "I love your work.", year: 2019, month: 4 },
        ]
    };

    render() {
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
