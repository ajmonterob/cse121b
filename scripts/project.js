// Import the displayCityLocalTime from your utilities
// Assume displayCityLocalTime is defined elsewhere and properly handles displaying local time for cities
import { displayCityLocalTime } from './timeUtils.js';

let enteredCities = [];
const submitBtn = document.getElementById('submit-btn');
const weatherDataDiv = document.getElementById('weather-data');
const notificationDiv = document.getElementById('notification');

// Initial button text
updateButtonText();

document.getElementById('submit-btn').addEventListener('click', function() {
    let cityInput = document.getElementById('city-input').value.trim();
    document.getElementById('city-input').value = '';

    // Filter out any empty input and prevent duplicates
    if (cityInput && !enteredCities.includes(cityInput)) {
        let newCities = cityInput.split(',')
            .map(city => city.trim().charAt(0).toUpperCase() + city.trim().slice(1).toLowerCase()) // Capitalize city names
            .filter(city => city && !enteredCities.includes(city)); // Remove empty and duplicate entries

        // Add each new city to the array and fetch weather data
        newCities.forEach(city => {
            if (enteredCities.length < 3) {
                enteredCities.push(city);
                fetchWeatherData(city);
            }
        });

        if (newCities.length > 0) {
            updateButtonText(); // Update the button text each time a city is added
        } else if (enteredCities.length >= 3) {
            displayMaxCitiesReachedMessage();
        }
    } else if (enteredCities.length >= 3) {
        // Display a custom message on the page with a reset option
        displayMaxCitiesReachedMessage();
    }
});

function fetchWeatherData(city) {
    const url = `https://goweather.herokuapp.com/weather/${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(city, data);
            displayCityLocalTime(city); // Ensure this function is correctly implemented
        })
        .catch(error => {
            console.error('Error fetching weather data for city:', city, error);
            weatherDataDiv.innerHTML += `<p>Failed to retrieve weather data for ${city}. Please try again.</p>`;
        });
}

function displayWeatherData(city, data) {
    const weatherHtml = `
        <div class="weather-info">
            <h2>${city}</h2>
            <p>Temperature: ${data.temperature}</p>
            <p>Wind: ${data.wind}</p>
            <p>Description: ${data.description}</p>
        </div>
    `;
    weatherDataDiv.insertAdjacentHTML('beforeend', weatherHtml);
}

function updateButtonText() {
    submitBtn.textContent = enteredCities.length > 0 ? "Add another city to compare" : "Submit";
}

function displayMaxCitiesReachedMessage() {
    notificationDiv.innerHTML = `<p>You have reached the limit of 3 cities.</p><button onclick="resetCities()">Reset</button>`;
}

function resetCities() {
    enteredCities = [];
    weatherDataDiv.innerHTML = '';
    notificationDiv.innerHTML = '';
    updateButtonText(); // Reset the button text to initial state
}

// Make resetCities globally accessible for the inline onclick handler
window.resetCities = resetCities;
