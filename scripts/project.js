import { displayCityLocalTime } from './timeUtils.js';

let enteredCities = [];
const submitBtn = document.getElementById('submit-btn');
const weatherDataDiv = document.getElementById('weather-data');
const notificationDiv = document.getElementById('notification');

updateButtonText();

document.getElementById('submit-btn').addEventListener('click', function() {
    const cityInputField = document.getElementById('city-input');
    let cityInput = cityInputField.value.trim();
    cityInputField.value = '';

    if (!cityInput) {
        alert("Please enter a city name.");
        return; // Exit if the input is empty
    }

    // Disable the input field and submit button to prevent new entries
    cityInputField.disabled = true;
    submitBtn.disabled = true;

    // Check if the city is already in the enteredCities array
    if (enteredCities.includes(cityInput.toLowerCase())) { // Convert to lowercase for case-insensitive comparison
        alert("This city has already been added. Please enter a different city.");
        // Re-enable the input field and submit button
        cityInputField.disabled = false;
        submitBtn.disabled = false;
        return; // Exit if the city has already been added
    }

    if (enteredCities.length < 3) {
        fetchWeatherData(cityInput);
    } else {
        displayMaxCitiesReachedMessage();
    }
});

function fetchWeatherData(city) {
    const url = `https://goweather.herokuapp.com/weather/${city}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to retrieve weather data for the city ${city}. Public API not available at the time. Please try again later.`);
            }
            return response.json();
        })
        .then(data => {
            if (data.temperature === "" && data.wind === "" && data.description === "") {
                throw new Error(`No data found for a city called ${city}`);
            }
            enteredCities.push(city.toLowerCase()); // Add city to the array only if data is found
            displayWeatherData(city, data);
            displayCityLocalTime(city);
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error.message); // Use alert for error messages
        })
        .finally(() => {
            // Re-enable the input field and submit button in both success and error cases
            document.getElementById('city-input').disabled = false;
            submitBtn.disabled = false;
            updateButtonText();
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
    updateButtonText(); 
    document.getElementById('city-input').disabled = false;
    submitBtn.disabled = false;
}

// Expose the function to the global scope correctly
window.resetCities = resetCities;
