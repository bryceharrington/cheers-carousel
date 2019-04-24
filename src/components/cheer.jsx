import React, { Component } from 'react';

class Cheer extends Component {
    render() {
	    const { id, amount, memo, year, month, image, active } = this.props;
	    let classes = "carousel-item";
	    if ( active === id ) {
	        classes += " active";
	    }
	    let background = "url('" + image + "')";
        let month_str = "" + month;
        if ( month < 10 ) {
            month_str = "0" + month;
        }

	    return (
            <div className={classes}
                 style={{border: "20px solid black", "backgroundImage": background}}>
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h2 className="carousel-2">{amount}</h2>
                <h1 className="carousel-1">{memo}</h1>
                <h3 className="carousel-3">{year}-{month_str}</h3>
              </div>
            </div>
	    );
    }
}

export default Cheer;
