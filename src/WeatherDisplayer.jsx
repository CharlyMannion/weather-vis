import React from 'react';

const WeatherDisplayer = (props) => {
    console.log(props, "PROPS");
    return (
        <section>
            <h2>Some stuff about weather!</h2>
            <h3>The weather in {props.weatherData.name} is:</h3> 
            <p>Conditions: {props.weatherData.weather ? props.weatherData.weather[0].main : 'not found'}</p>
        </section>
    )
};

export default WeatherDisplayer;