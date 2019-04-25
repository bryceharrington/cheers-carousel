import React, { Component } from 'react';
import Cheer from './cheer';
import CheerNav from './cheernav';

class Cheers extends Component {
    render() {
	    const { cheers } = this.props;

        return (
        <div id="cheers-carousel" className="carousel slide carousel-fade carousel-fullscreen" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            { cheers.map(cheer => (
              <Cheer key={cheer.id}
                     id={cheer.id}
                     memo={cheer.memo}
                     year={cheer.year}
                     month={cheer.month}
                     active={0}
              />
            ))}
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

          <div className="carousel-footer">
            <a href="https://inkscape.org/support-us/donate/">Donate</a>
          </div>

          <ol className="carousel-indicators">
            { cheers.map(cheer => (
              <CheerNav key={cheer.id}
                        id={cheer.id}
                        active={0}
              />
            ))}
          </ol>
        </div>
        );
    }
}

export default Cheers;
