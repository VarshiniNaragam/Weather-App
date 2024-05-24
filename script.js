async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '118c4584da4cb66fee8715b0ee057b76'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherDisplay').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const { name, main, weather } = data;
    weatherDisplay.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
    `;
}
