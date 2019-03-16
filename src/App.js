import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        active: 0,
        cheers: [
            { id: 0, comment: "Thanks!" },
            { id: 1, comment: "Good work!" },
            { id: 2, comment: "Keep it up!" },
            { id: 3, comment: "I love your work." }
        ]
    };

    render() {
        return (
        <div id="cheers-carousel" className="carousel slide carousel-fade carousel-fullscreen" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic2" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic2" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic2" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active"
                 style={{border: "20px solid black", "background-image": "url('img/carousel1.jpg')"}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{this.state.cheers[0].comment}</h1>
                <p className="h4 font-weight-light">detail</p>
              </div>
            </div>
            <div className="carousel-item"
                 style={{border: "20px solid black", "background-image": "url('img/carousel2.jpg')"}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{this.state.cheers[1].comment}</h1>
                <p className="h4 font-weight-light">detail</p>
              </div>
            </div>
            <div className="carousel-item"
                 style={{border: "20px solid black", "background-image": "url('img/carousel3.jpg')"}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{this.state.cheers[2].comment}</h1>
                <p className="h4 font-weight-light">detail</p>
              </div>
            </div>
            <div className="carousel-item"
                 style={{border: "20px solid black", "background-image": "url('img/carousel2.jpg')"}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{this.state.cheers[3].comment}</h1>
                <p className="h4 font-weight-light">detail</p>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev"
             href="#carousel-example-generic2"
             role="button"
             data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next"
             href="#carousel-example-generic2"
             role="button"
             data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        );
    }
}

export default App;
