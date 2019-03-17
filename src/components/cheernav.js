import React, { Component } from 'react';

class CheerNav extends Component {
    render() {
	    const { id, active } = this.props;
	    if ( active === id ) {
            return (
            <li data-target="#cheers-carousel" data-slide-to={id} className="active"></li>
            );
	    } else {
            return (
            <li data-target="#cheers-carousel" data-slide-to={id}></li>
            );
        }
    }
}

export default CheerNav;
