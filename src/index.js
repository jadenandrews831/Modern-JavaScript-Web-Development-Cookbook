/* @flow */


const axios = require("axios")

const BASE_URL = "https://weather.com/en-IN/weather/today/l/"

// latitude and longitude data for our three cities
const MONTEVIDEO_UY = '-34.90,-56.16'
const LONDON_EN = '51.51,-0.13'
const PUNE_IN = '18.52,73.86'

const getWeather = coords => axios.get(`${BASE_URL}${coords}`)

getWeather(LONDON_EN);
/*
function getMontevideo()
{
  getWeather(MONTEVIDEO_UY)
    .then(result => 
      {
        console.log("Montevideo, with promises")
        console.log(`Montevideo: ${result.data.length} bytes`)
      })
    .catch(error => console.log(error.message))
}

getMontevideo()

function getLondonAndPuneInSeries()
{
  getWeather(LONDON_EN)
    .then(londonData => 
      {
        getWeather(PUNE_IN)
          .then(puneData => 
            {
              console.log("London and Pune, in series")
              console.log(`London: ${londonData.data.length} b`)
              console.log(`Pune: ${puneData.data.length} b`)
            })
          .catch(error => console.log("Error getting puneData", error.message))
      })
    .catch(error => console.log("Error getting londonData", error.message))
}

getLondonAndPuneInSeries();*/
async function getMontevideo()
{
  try{
    const montevideoData = await getWeather(MONTEVIDEO_UY)
    console.log("Montevideo, with async/await")
    console.log(`Montevideo: ${montevideoData.data.length}`)
  }
  catch (error)
  {
    console.log("OOPS... something went wrong", error.message)
  }
}

getMontevideo()


async function getLondonAndPuneInSeries()
{
  try
  {
    const londonData = await getWeather(LONDON_EN)
    const puneData = await getWeather(PUNE_IN)
    console.log()
    console.log("London and Pune, in series")
    console.log(`London: ${londonData.data.length} b`)
    console.log(`Pune: ${puneData.data.length} b`)
  }
  catch(error)
  {
    console.log("OOPS... something went wrong", error.message)
  }
}

getLondonAndPuneInSeries();