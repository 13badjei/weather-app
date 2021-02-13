const request = require("request")
const dotenv = require("dotenv").config()



const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${process.env.API_KEY}'



request(url, (error, response, body) => { 
const data = JSON.parse(body)
console.log(data.main.temp) 

} ) 

