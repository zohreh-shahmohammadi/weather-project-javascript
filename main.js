var cityInput  = document.getElementById("cityInput");
var addInput   = document.getElementById("add");
var cityOutput = document.getElementById("cityoutput");
var DesOutput  = document.getElementById("description");
var TempOutput = document.getElementById("temp");
var WindOutput = document.getElementById("wind");
const apiKey= "3045dd712ffe6e702e3245525ac7fa38";


function convertCelvinToCelisiusYaContiGrad(value){
return (value-273).toFixed(2);
}

async function GetWeather(){
var weatherResult = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
${cityInput.value}&appid=${apiKey}`)).json();

setInfo(weatherResult);
}
function setInfo(data){
    var cityName = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];
    cityOutput.innerHTML = `City : ${cityName}`;
    DesOutput.innerHTML = `Description : ${description}`;
    TempOutput.innerHTML = `Temprature : ${convertCelvinToCelisiusYaContiGrad(temp)}`;
    WindOutput.innerHTML = `Wind Speed : ${wind}Km/h` ;
}
addInput.addEventListener('click',GetWeather);
