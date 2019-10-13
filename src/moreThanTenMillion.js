const data = require("all-the-cities")

// data.filter(ele => ele.population > 10000000).forEach(ele => console.log(ele.name))

// data.filter(ele => ele.country === "CN").forEach(ele => console.log(ele.name))

data.filter(ele => ele.country === "CN").sort(function(a,b){
    return a.population - b.population
}).forEach(ele => console.log(ele.name))

// var bigCities = data.filter(function(city){
//     var isOverTenMillion = city.population > 10000000
//     return isOverTenMillion
// })

// var chinaCities = data.filter(function(city){
//     return isInChina = city.country === 'CN'
// })

// var bigChinaCities = data.filter(function(city){
//     return shouldReturn = city.country === 'CN' && city.poplution > 10000000
// })

// var bigChinaCities2 = data.filter(function(city){
//     return shouldReturn = city.country
// }).filter(function(city){
//     return isOverTenMillion = city.population > 10000000
// })