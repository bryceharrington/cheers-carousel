import React, { Component } from 'react';

class Cheer extends Component {
    render() {
	    const { id, memo, year, month, image, active } = this.props;
	    let classes = "carousel-item";
	    if ( active === id ) {
	        classes += " active";
	    }
	    let background = "url('" + image + "')";

	    return (
            <div className={classes}
                 style={{border: "20px solid black", "backgroundImage": background}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="display-2 font-weight-bold">{memo}</h1>
                <p className="h4 font-weight-light">{year}-{month}</p>
              </div>
            </div>
	    );
    }
}

export default Cheer;
