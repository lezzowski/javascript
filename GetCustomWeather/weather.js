var weather = require("npm-openweathermap")
var express = require("express")
var forecast = express()

weather.api_key = "ac6533beb0390040930ce858a0a6bd88"
weather.temp = "c"


var temperature = (req,resp) => {
    weather.temp = "c"
    weather.get_weather_custom('city', req.params.city, 'weather').then((res) =>
        resp.json(res),
        (error)=>
        resp.status(400).json(error)
    )
}

var temperatureByZip = (req,resp) => {
    weather.temp = "c"
    weather.get_weather_custom('zip', req.params.zip, 'weather').then((res) =>
        resp.json(res),
        (error)=>
        resp.json(error)
    )
}

forecast.get("/weather/cities/:city", temperature)
forecast.get("/weather/zips/:zip", temperatureByZip)

forecast.listen(3001)