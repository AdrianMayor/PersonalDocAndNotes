import { getLocation, getCity } from '../services/location'
import { getWeather, getMyWeather } from '../services/weather'

const api = {
    location: {
        getLocation,
        getCity
    },
    weather: {
        getWeather,
        getMyWeather
    }
}

export default api