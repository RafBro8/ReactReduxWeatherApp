import React, {Component} from 'react';
import { connect } from 'react-redux';
import Charts from '../components/charts';
import GoogleMapz from '../components/google_mapz';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273 + 32);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        //convert above 2 lines to ES6 syntax below in 1 line
        const { lon, lat } = cityData.city.coord;
        //console.log(temps);


        return (
            <tr key={name}>
                {/*<td>{name}</td>*/}
                <td><GoogleMapz lon={lon} lat={lat}/></td>
                <td><Charts data={temps} color="red" units="F" /></td>
                <td><Charts data={pressures} color="orange" units="hPa" /></td>
                <td><Charts data={humidities} color="green" units="%" /></td>
            </tr>
        );

    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (F)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {weather: state.weather};
    //ES6 syntax function mapStateToProps({ weather }) {
    //return {weather}; }
}
export default connect(mapStateToProps)(WeatherList);