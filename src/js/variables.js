async function getData() {
const cityName = document.querySelector('#search-input').value
const apiKey = '32730c5013c348f813486342bf89453b';
const baseUrl =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;
const response = await fetch(`${baseUrl}`)
const data = await response.json()
}
export {getData}