const display = document.getElementById("display")
const userInput = document.getElementById("userInput")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const tempImg = document.getElementById("tempImg")


tempImg.innerHTML = ``
wind.innerHTML = `   wind`
humidity.innerHTML = ` Humididy`



    async function checkWeather(userInput){
        const apiKey = "57d390f4718afec9f551260363b585f5"
        const baseUrl =   `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`
        const weatherData = await fetch(baseUrl).then(response => response.json());


        if(weatherData.cod ==="404"){
            display.innerHTML = `
             <h1>Invalid City Name</h1>
            `
            tempImg = `Error`
        }
        console.log(weatherData)
         
            display.innerHTML = `
            <h1> ${Math.round((weatherData.main.temp)-273)}&deg;C
             ${weatherData.weather[0].main} </h1>
              `
            wind.innerHTML = ` Wind :  
            <span>
            ${weatherData.wind.speed} %
            </span>`
            humidity.innerHTML = ` Humidity : 
           <span> ${weatherData.main.humidity}  %  </span>`
            switch (weatherData.weather[0].main) {
                case "Cloud":
                tempImg.src = "/images/cloud.png"
                break;
                case "Clear":
                tempImg.src = "/images/clear.png"
                break;
                case "Rain":
                tempImg.src = "/images/rain.png"
                break
                case "Snow":
                tempImg.src= "/images/snow.png"
                break
                case "Mist":
                tempImg.src= "/images/mist.png"
                break
            }
    }



    let timeOutId;

    userInput.addEventListener("input",()=>{
        clearTimeout(timeOutId)
        timeOutId = setTimeout(()=>{
            checkWeather(userInput.value)
        },500)
    })



















