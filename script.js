const forecastData = document.querySelector('#forecastData');

async function getForecast(location) {
    try {
        const cityCurrentData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}`)
            .then(function(response) {
                return response.json()
            })
            .catch(function(error) {
                console.error(error);
            });
        const cityForecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityCurrentData.coord.lat}&lon=${cityCurrentData.coord.lon}&exclude=current,minutely,hourly,alerts&units=${parseInt(document.querySelector('input[name="temp"]:checked').value) ? 'metric' : 'imperial'}&appid=${OPENWEATHER_API_KEY}`)
            .then(function(response) {
                return response.json();
            })
            .catch(function(error) {
                console.error(error);
            });
        return cityForecast;
    } catch (error) {
        console.error(error);
    }
}

function renderForecast(cityForecast) {
    while (forecastData.firstChild) {
        forecastData.removeChild(forecastData.firstChild);
    }
    cityForecast.daily.forEach((dayForecast) => {
        const div = document.createElement('div');
        const dateTime = document.createElement('p');
        const dateTimeUTC = new Date(0);
        dateTimeUTC.setUTCSeconds(dayForecast.dt);
        dateTime.innerText = `${getDay(dateTimeUTC.getDay())}, ${getMonth(dateTimeUTC.getMonth())} ${dateTimeUTC.getDate()}`
        div.appendChild(dateTime);
        const highTemp = document.createElement('p');
        highTemp.innerText = `High Temperature: ${dayForecast.temp.max} ${parseInt(document.querySelector('input[name="temp"]:checked').value) ? 'C' : 'F'}`;
        div.appendChild(highTemp);
        const lowTemp = document.createElement('p');
        lowTemp.innerText = `Low Temperature: ${dayForecast.temp.min} ${parseInt(document.querySelector('input[name="temp"]:checked').value) ? 'C' : 'F'}`;
        div.appendChild(lowTemp);
        forecastData.appendChild(div);
    });
}

document.querySelector('#getWeather').addEventListener('click', async () => {
    try {
        const data = await getForecast(document.querySelector('#location').value);
        renderForecast(data);
    } catch (error) {
        console.error(error);
    }
});

function getDay(day) {
    switch (day) {
        case 0: return 'Sunday'
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        case 3: return 'Wednesday'
        case 4: return 'Thursday'
        case 5: return 'Friday'
        case 6: return 'Saturday'
    }
}

function getMonth(month) {
    switch (month) {
        case 0: return 'January'
        case 1: return 'February'
        case 2: return 'March'
        case 3: return 'April'
        case 4: return 'May'
        case 5: return 'June'
        case 6: return 'July'
        case 7: return 'August'
        case 8: return 'September'
        case 9: return 'October'
        case 10: return 'November'
        case 11: return 'December'
    }
}