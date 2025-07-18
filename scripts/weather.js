const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// 49.75, 6.63

const myKey = 'https://github.com/KarenJoos/wdd231.git'

const url = 'api.openweathermap.org/data/2.5/forecast?lat={49.75}&lon={6.63}&appid={63b2bb263f9f2fa71a0b7cba76257361}'