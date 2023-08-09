let apiKey = "9d1e0729d38153d232626145c094f955";

function callWeatherApi(city){
    fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    ).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        showWeatherApi(data)
    }).catch((error) => {
        console.log(error);
    })
}
callWeatherApi('Visakhapatnam')
const leftSide = document.querySelector(".left-side");
function showWeatherApi(data) {
    if (data) {
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { humidity, temp } = data.main;
        const { speed } = data.wind;

        leftSide.innerHTML = `
        <h1>Weather in ${name}</h1>
        <div class="temp">
            <i class='bx bxs-thermometer'></i>
            ${temp} °C
        </div>
        <div class="icon-desc">
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="">
            <div>${description}</div>
        </div>
        <div>
            <i class='bx bx-droplet' ></i>
            humidity: ${humidity} %
        </div>
        <div>
            <i class='bx bx-wind' ></i>
            wind speed: ${speed} km/h
        </div>
        `;
    }
}

const searchButton = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box Input");

searchButton.addEventListener('click', () => {
    let inputValue = searchInput.value
    if(inputValue) {
        callWeatherApi(inputValue)
    } else {
      Swal.fire({
        icon: "info",
        title: "City Name!?",
        text: 'please enter the city name',
        });
    }
})