const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const tempHigh = document.querySelector('#high');
const tempLow = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');


// 40.51, -112.03

const myKey = "2ae97b4f41228da1a40cc7e460e7379a";
// const myLat = "40.51";
// const myLong = "-112.03";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.51&lon=-112.03&appid=${myKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let fahrenheitTemp = `${(data.main.temp - 273.15) * 1.8 + 32}`;
    currentTemp.innerHTML = fahrenheitTemp.toString(2) + '&deg;F';
    humidity.innerHTML = `${data.main.humidity}%`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    // tempHigh.textContent = `${hi}`;
}

apiFetch();