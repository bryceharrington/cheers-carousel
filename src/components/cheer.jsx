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
                <h1 className="h1 font-weight-light">{amount}</h1>
                <h2 className="display-2 font-weight-bold">{memo}</h2>
                <p className="h4 font-weight-light">{year}-{month_str}</p>
              </div>
            </div>
	    );
    }
}

export default Cheer;
