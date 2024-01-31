import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        console.log("API Key:", apiKey);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        console.log("URL:", url);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            setWeatherData(data);
            console.log("Weather Data:", weatherData);
        } catch (error) {
            console.error(`Failed to fetch weather data:`, error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e)=> setCity(e.target.value)}
                    placeholder="Enter city name"
                />
                <button type="submit">Search</button>
            </form>
            {weatherData && (
                <div className="weather-info">
                    <h3>Weather in {weatherData.name}</h3>
                    <p>Temperature: {((weatherData.main.temp * 9/5) + 32).toFixed(0)} °F</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                </div>
            )}

        </div>
    );
}

export default SearchBar;