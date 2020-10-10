export class WeatherService {
    _APIkey = '8922936643e8cfaf5e54111e5df1538a'
    _iconUrl = "http://openweathermap.org/img/w/"

    getResource = async (city) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._APIkey}`)
        if (!res.ok) {
            throw new Error(`Not found by ${city}`)
        }
        const body = await res.json()
        return body
    }
    getIcon = (id) => {
        return `${this._iconUrl}${id}.png`
    }
}