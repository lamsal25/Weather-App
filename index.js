
const apikey = "40cdeb0ce394ca7db66e77bf31af9a6b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".search input");
const btn = document.querySelector(".search button");

const weathericon = document.querySelector(".weathericon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
         document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        }

        else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/partly_cloudy.png";
        }

        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        }

        else if (data.weather[0].main == "Thunderstorm") {
            weathericon.src = "images/thunderstorms.png";
        }

        else if (data.weather[0].main == "Wind") {
            weathericon.src = "images/wind.png";
        }

        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/sunny.png";
        }
    

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
}
btn.addEventListener("click", () => {
    checkweather(city.value);
})


