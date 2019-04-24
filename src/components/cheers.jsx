import React, { Component } from 'react';
import Cheer from './cheer';
import CheerNav from './cheernav';

class Cheers extends Component {
    getImage(images, i) {
	    return images[i % images.length];
    }

    render() {
	    const { cheers, images } = this.props;

        return (
        <div id="cheers-carousel" className="carousel slide carousel-fade carousel-fullscreen" data-ride="carousel">
          <ol className="carousel-indicators">
            { cheers.map(cheer => (
              <CheerNav key={cheer.id}
                        id={cheer.id}
                        active={0}
              />
            ))}
          </ol>

          <div className="carousel-inner" role="listbox">
            { cheers.map(cheer => (
              <Cheer key={cheer.id}
                     id={cheer.id}
                     amount={cheer.amount}
                     memo={cheer.memo}
                     year={cheer.year}
                     month={cheer.month}
                     image={this.getImage(images, cheer.id)}
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
        </div>
        );
    }
}

export default Cheers;
