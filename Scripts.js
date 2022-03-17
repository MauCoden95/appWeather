const input = document.querySelector('#search');
const btn = document.querySelector('.btn-search');


const pweather = document.querySelector('.p-weather');
const phumidity = document.querySelector('.p-humidity');
const pcountry = document.querySelector('.p-country');
const ptemp = document.querySelector('.p-temp');
const pwind = document.querySelector('.p-wind');
const img = document.querySelector('.img');

window.addEventListener('load' , function() {
    input.value = '';
})


btn.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=b96a4f10edc8aef30106bb477a8686c8')
    .then(response => response.json())
    .then(data => {
        var descWeather = data['weather'][0]['description'];
        var humidity = data['main']['humidity'];
        var country = data['sys']['country'];
        var temp = Math.ceil(data['main']['temp'] - 273.15);
        var windSpeed = data['wind']['speed'];
        var iconWeather = data['weather'][0]['icon'];
        var iconUrl = "http://openweathermap.org/img/w/" + iconWeather + ".png";



       
        pweather.innerHTML = descWeather;
        phumidity.innerHTML = humidity+'%';
        pcountry.innerHTML = country;
        ptemp.innerHTML = temp + '°C'
        pwind.innerHTML = windSpeed + ' km/h';
        img.src = iconUrl;
       
       
    })

   


})


