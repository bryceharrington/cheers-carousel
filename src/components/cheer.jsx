import React, { Component } from 'react';

class Cheer extends Component {
    render() {
	    const { id, memo, year, month, active } = this.props;
	    let classes = "carousel-item";
	    if ( active === id ) {
	        classes += " active";
	    }
        let month_str = "" + month;
        if ( month < 10 ) {
            month_str = "0" + month;
        }

	    return (
            <div className={classes}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1 className="carousel-1">{memo}</h1>
                <h3 className="carousel-3">{year}-{month_str}</h3>
              </div>
            </div>
	    );
    }
}

export default Cheer;
