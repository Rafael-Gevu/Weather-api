const searchBtn = document.querySelector('.search-btn')
const currentCity = document.querySelector('.current-city')
const currentTemperature = document.querySelector('.current-temperature')
const tempMax = document.querySelector('.temp-max')
const tempMin = document.querySelector('.temp-min')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const weatherIcon = document.querySelector('.weather-icon')

const feelsLike = document.querySelector('.feels-like')
const weatherInfo = document.querySelector('.weather-info')
searchBtn.addEventListener('click', function(){
    const cityName = document.querySelector('#search-input').value
    weatherInfo.classList.remove('display-none')
 async function getData() {
     const apiKey = '32730c5013c348f813486342bf89453b';
     const baseUrl =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;
     const response = await fetch(baseUrl)
     const data = await response.json()
     console.log(data)
     currentCity.innerHTML = `${data.name}, ${data.sys.country}`
     currentTemperature.innerHTML = `${data.main.temp.toFixed(1).toString().replace('.',',')} <sup>Cº</sup> `
     tempMax.innerHTML = `${data.main.temp_max.toFixed(1).toString().replace('.',',')} <sup>Cº</sup> `
     tempMin.innerHTML = `${data.main.temp_min.toFixed(1).toString().replace('.',',')} <sup>Cº</sup> `
     weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`) 
     wind.innerHTML = `${data.wind.speed.toFixed(1)}km/h`
     humidity.innerHTML = `${data.main.humidity}%`
     feelsLike.innerHTML = `${data.main.feels_like.toFixed(1).toString().replace('.',',')} <sup>Cº</sup> `
 }
 
getData()
})





