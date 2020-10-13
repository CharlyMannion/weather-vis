import React from 'react';
import './App.css';
import apiKey from './apiKey'

class App extends React.Component {
    state = {
        weather: []
    };

    componentDidMount() {
        console.log('mounting');
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=York&appid=${apiKey}`
        )
        .then((res) => {
            console.log(res, 'res');

            return res.json();
        })
        .then((info) => {
            console.log(info);
        });
    };

    render() {
        console.log('rendering');
        return (
            <div className = "App">
                Some stuff about weather
            </div>
        )
    }
}

export default App;