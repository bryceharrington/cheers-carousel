import React, { Component } from 'react';

class Cheers extends Component {
    render() {
	const { cheers } = this.props;

	console.log('Cheers - Rendered');

        return (
        <div id="cheers-carousel" className="carousel slide carousel-fade carousel-fullscreen" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#cheers-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#cheers-carousel" data-slide-to="1"></li>
            <li data-target="#cheers-carousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active"
                 style={{border: "20px solid black", "backgroundImage": "url('img/carousel1.jpg')"}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{cheers[0].memo}</h1>
                <p className="h4 font-weight-light">{cheers[0].year}-{cheers[0].month}</p>
              </div>
            </div>
            <div className="carousel-item"
                 style={{border: "20px solid black", "backgroundImage": "url('img/carousel2.jpg')"}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{cheers[1].memo}</h1>
                <p className="h4 font-weight-light">{cheers[1].year}-{cheers[1].month}</p>
              </div>
            </div>
            <div className="carousel-item"
                 style={{border: "20px solid black", "backgroundImage": "url('img/carousel3.jpg')"}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{cheers[2].memo}</h1>
                <p className="h4 font-weight-light">{cheers[2].year}-{cheers[2].month}</p>
              </div>
            </div>
            <div className="carousel-item"
                 style={{border: "20px solid black", "backgroundImage": "url('img/carousel2.jpg')"}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{cheers[3].memo}</h1>
                <p className="h4 font-weight-light">{cheers[3].year}-{cheers[3].month}</p>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev"
             href="#cheers-carousel"
             role="button"
             data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next"
             href="#cheers-carousel"
             role="button"
             data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        );
    }
}

export default Cheers;
