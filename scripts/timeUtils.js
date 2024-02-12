// timeUtils.js within the scripts folder
export function displayCityLocalTime(city) {
    const cityOffsets = {
        "New York": -5, // UTC-5
        "London": 0, // UTC+0
        "Tokyo": 9, // UTC+9
        "Paris": 1, // UTC+1
        "Berlin": 1, // UTC+1
        "Sydney": 10, // UTC+10
        "Los Angeles": -8, // UTC-8
        "Chicago": -6, // UTC-6
        "Moscow": 3, // UTC+3
        "Dubai": 4, // UTC+4
        "Singapore": 8, // UTC+8
        "Hong Kong": 8, // UTC+8
        "Bangkok": 7, // UTC+7
        "Cairo": 2, // UTC+2
        "Johannesburg": 2, // UTC+2
        "Istanbul": 3, // UTC+3
        "Rio de Janeiro": -3, // UTC-3
        "Mexico City": -6, // UTC-6
        "Buenos Aires": -3, // UTC-3
        "Mumbai": 5.5, // UTC+5:30
        "Shanghai": 8, // UTC+8
        "Beijing": 8, // UTC+8
        "Seoul": 9, // UTC+9
        "Bangalore": 5.5, // UTC+5:30
        "Toronto": -5, // UTC-5
        "Vancouver": -8, // UTC-8
        "Montreal": -5, // UTC-5
        "São Paulo": -3, // UTC-3
        "Lima": -5, // UTC-5
        "Bogotá": -5, // UTC-5
        "Santiago": -4, // UTC-4
        "Lagos": 1, // UTC+1
        "Nairobi": 3, // UTC+3
        "Cape Town": 2, // UTC+2
        "Madrid": 1, // UTC+1
        "Rome": 1, // UTC+1
        "Athens": 2, // UTC+2
        "Helsinki": 2, // UTC+2
        "Oslo": 1, // UTC+1
        "Stockholm": 1, // UTC+1
        "Copenhagen": 1, // UTC+1
        "Vienna": 1, // UTC+1
        "Brussels": 1, // UTC+1
        "Amsterdam": 1, // UTC+1
        "Zurich": 1, // UTC+1
        "Warsaw": 1, // UTC+1
        "Budapest": 1, // UTC+1
        "Prague": 1, // UTC+1
        "Lisbon": 0, // UTC+0
        "Dublin": 0, // UTC+0
        "Quito": -5, // UTC-5
        "Kingston": -5, // UTC-5
        "Havana": -5, // UTC-5
        "Ottawa": -5, // UTC-5
        "Panama City": -5, // UTC-5
        "Caracas": -4, // UTC-4
        "La Paz": -4, // UTC-4
        "Santiago": -4, // UTC-4
        "Buenos Aires": -3, // UTC-3
        "Montevideo": -3, // UTC-3
        "Sao Paulo": -3, // UTC-3
        "Reykjavik": 0, // UTC+0
        "Dakar": 0, // UTC+0
        "Algiers": 1, // UTC+1
        "Lagos": 1, // UTC+1
        "Vienna": 1, // UTC+1
        "Brussels": 1, // UTC+1
        "Sarajevo": 1, // UTC+1
        "Sofia": 2, // UTC+2
        "Cairo": 2, // UTC+2
        "Athens": 2, // UTC+2
        "Harare": 2, // UTC+2
        "Baghdad": 3, // UTC+3
        "Kuwait City": 3, // UTC+3
        "Moscow": 3, // UTC+3
        "Nairobi": 3, // UTC+3
        "Tehran": 3.5, // UTC+3:30
        "Abu Dhabi": 4, // UTC+4
        "Baku": 4, // UTC+4
        "Muscat": 4, // UTC+4
        "Tbilisi": 4, // UTC+4
        "Yerevan": 4, // UTC+4
        "Kabul": 4.5, // UTC+4:30
        "Tashkent": 5, // UTC+5
        "Islamabad": 5, // UTC+5
        "Karachi": 5, // UTC+5
        "Kolkata": 5.5, // UTC+5:30
        "Mumbai": 5.5, // UTC+5:30
        "Kathmandu": 5.75, // UTC+5:45
        "Almaty": 6, // UTC+6
        "Dhaka": 6, // UTC+6
        "Yangon": 6.5, // UTC+6:30
        "Bangkok": 7, // UTC+7
        "Jakarta": 7, // UTC+7
        "Hanoi": 7, // UTC+7
        "Krasnoyarsk": 7, // UTC+7
        "Beijing": 8, // UTC+8
        "Singapore": 8, // UTC+8
        "Hong Kong": 8, // UTC+8
        "Perth": 8, // UTC+8
        "Irkutsk": 8, // UTC+8
        "Seoul": 9, // UTC+9
        "Tokyo": 9, // UTC+9
        "Darwin": 9.5, // UTC+9:30
        "Adelaide": 9.5, // UTC+9:30
        "Sydney": 10, // UTC+10
        "Brisbane": 10, // UTC+10
        "Hobart": 10, // UTC+10
        "Vladivostok": 10, // UTC+10
        "Guam": 10, // UTC+10
        "Port Moresby": 10, // UTC+10
        "Magadan": 11, // UTC+11
        "Suva": 12, // UTC+12
        "Wellington": 12, // UTC+12
        "Auckland": 12, // UTC+12
        "Fiji": 13, // UTC+13
    };

    const utcOffset = cityOffsets[city];
    if (utcOffset !== undefined) {
        const currentTime = new Date();
        const localTime = new Date(currentTime.getTime() + currentTime.getTimezoneOffset() * 60000 + (utcOffset * 3600000));
        const timeString = localTime.toLocaleTimeString();
        const timeHtml = `<p>Local Time: ${timeString}</p>`;
        document.getElementById('weather-data').insertAdjacentHTML('beforeend', timeHtml);
    } else {
        document.getElementById('weather-data').insertAdjacentHTML('beforeend', `<p>Local Time: Timezone not found for ${city}</p>`);
    }
}
