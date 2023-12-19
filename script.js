//get HTML elements

/*
    1: Tempature

    2: Wind Chill

    3: Humidity

    4: Wind Speed

*/

const currently = [document.querySelector('#current-temp'),
document.querySelector('#current-windChill'),
document.querySelector('#current-humid'),
document.querySelector('#current-windSpeed')]







//api work
const url = 'https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=9d41b79c9f21e04a57f59ee61de10204'
fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const wObject = jsObject;
        console.log(wObject.main.temp)

        currently[0].textContent = Math.floor((wObject.main.temp - 273.15) * 1.8 + 32)
        currently[1].textContent = wObject.wind.deg
        currently[2].textContent = wObject.main.humidity
        currently[3].textContent = wObject.wind.speed
    })