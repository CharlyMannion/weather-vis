import React from 'react';
import './App.css';
import apiKey from './apiKey'
import Header from './Header'
import WeatherGetter from './WeatherGetter'
import WeatherDisplayer from './WeatherDisplayer'

class App extends React.Component {
    state = {
        weather: {},
        currentCity: 'Upper Poppleton'
    };

    componentDidMount() {
        console.log('mounting');
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&appid=${apiKey}`
        )
        .then((res) => {
            return res.json();
        })
        .then((items) => {
            console.log(items, "ITEMS");
            console.log(items.weather[0].main, "ITEMS WEATHER[0] MAIN");
            this.setState({ weather: items})
        });
    };

    render() {
        console.log('rendering');
        return (
            <div className = "App">
                <Header />
                <WeatherGetter />
                <WeatherDisplayer weatherData={this.state.weather}/>
            </div>
        )
    }
}

export default App;