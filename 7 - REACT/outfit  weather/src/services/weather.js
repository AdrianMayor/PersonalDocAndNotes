import { getLocation } from "./location"
const apiKey = '38bf43763474e996f4a7655034098a17';
const getData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}
export const getWeather = async ({ latitude, longitude }) => {
    if (!latitude || !longitude) throw new Error('Not defined latitude or longitude')
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    const { city, list } = await getData(url)
    const element = list[0]
    return {
        city,
        temperature: element.main.temp - 273.15,
        pop: element.pop,
        description: element.weather[0].main,
        windGust: element.wind.speed * 1.51
    }
}

export const getMyWeather = async() => {
    const coords = await getLocation()
    return await getWeather(coords)
}