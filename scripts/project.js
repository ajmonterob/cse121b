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
        return; 
    }


    cityInputField.disabled = true;
    submitBtn.disabled = true;


    if (enteredCities.includes(cityInput.toLowerCase())) { 
        alert("This city has already been added. Please enter a different city.");
        cityInputField.disabled = false;
        submitBtn.disabled = false;
        return; 
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
            // First, check if the response status is 503
            if (response.status === 503) {
                // This creates a new error object with a specific message for 503 errors
                throw new Error(`The weather service is temporarily unavailable. Please try again later.`);
            }
            // Check if the response is not OK (excluding the 503 checked above)
            if (!response.ok) {
                throw new Error(`Failed to retrieve weather data for the city ${city}. Please try again later.`);
            }
            return response.json();
        })
        .then(data => {
            // Verify the data isn't empty, as before
            if (data.temperature === "" && data.wind === "" && data.description === "") {
                throw new Error(`No data found for a city called ${city}.`);
            }
            // Process and display the data as before
            enteredCities.push(city.toLowerCase());
            displayWeatherData(city, data);
            displayCityLocalTime(city);
        })
        .catch(error => {
            console.error('Error:', error);
            // Simulate detecting a "503 Service Unavailable" error
            if (error.message === "Failed to fetch") {
                // Assuming "Failed to fetch" is treated as a stand-in for the "503 Service Unavailable"
                alert("The weather service is temporarily unavailable (503 Service Unavailable). Please try again later.");
            } else {
                // For other errors, display the actual error message.
                alert(error.message);
            }
        })
        
        .finally(() => {
            // Re-enable the input and button, allowing further attempts
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

window.resetCities = resetCities;
