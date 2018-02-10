import React, { Component } from 'react';

class GoogleMapz extends Component {

    componentDidMount() {
        //lifecycle method that gets called automatically
        //after this component has been rendered to the screen
        new google.maps.Map(this.refs.map, {
            //creating embedded Google map the inside document
            //this.refs.map references HTML element, and it's where the map gets rendered to
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        return <div ref="map"/>;
        //this.refs.map

    }
}


export default GoogleMapz;