const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const tempHigh = document.querySelector('#high');
const tempLow = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');


// 40.51, -112.03

const myKey = "484eefccd05a797869ea963cf089d774";
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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    // tempHigh.textContent = `${hi}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    let timezone = data.timezone;
    let rise = data.sys.sunrise;
    let srise = moment.utc(rise, 'X').add(timezone, 'seconds').format('HH:mm a');
    sunrise.innerHTML = `${srise}`;
    let set = data.sys.sunset;
    let sset = moment.utc(set, 'X').add(timezone, 'seconds').format('HH:mm a');
    sunset.innerHTML = `${sset}`;

}

apiFetch();