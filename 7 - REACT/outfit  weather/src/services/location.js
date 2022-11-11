import { getWeather } from "./weather"

export const getLocation = async () => {
    if (navigator.geolocation) {
        const getPosition = () => new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej))
        const { coords : { latitude, longitude }} = await getPosition()  
        return { latitude, longitude }
    }
    throw new Error("Geolocation is not supported by this browser.")
}

export const getCity = async () => {
    const coords = await getLocation()
    const { city: { name }} = await getWeather(coords)
    return name
}