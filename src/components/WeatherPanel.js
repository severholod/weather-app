import React from 'react'
import {ErrorIndicator} from '../services/ErrorIndicator'
import {WeatherService} from '../services/WeatherService'
import {Loader} from './Loader'

export class WeatherPanel extends React.Component {
    constructor() {
        super()
        this.state = {
            data: {},
            loading: true,
            error: false
        }
        this.weatherAPI = new WeatherService()
    }

    componentDidMount() {
        this.getWeather()
    }
    componentDidUpdate(prevProps) {
        if (this.props.selectedCity !== prevProps.selectedCity) {
            this.getWeather()
        }
    }

    getWeather = () => {
        this.setState({loading: true})
        this.weatherAPI.getResource(this.props.selectedCity)
            .then(data => {
                this.setState({
                    data,
                    loading: false,
                    error: false
                })
            })
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error) {
            return (
                <ErrorIndicator/>
            )
        }
        if (this.state.loading) {
            return (
                <Loader />
            )
        }
        const {data} = this.state
        let temp = Math.floor(data.main.temp - 273)
        temp = temp > 0 ? `+${temp}` : temp
        const icon = this.weatherAPI.getIcon(data.weather[0].icon)
        return (
            <div className="weather-panel">
                <div className="weather-city">{data.name}</div>
                <div className="weather-country">{data.sys.country}</div>
                <div className="weather-main">
                    <div className="weather-main__temp">{temp}</div>
                    <div className="weather-main__inf">
                        <span>{data.weather[0].main}</span>
                        <img src={icon} alt="cloudy"/>
                    </div>
                </div>
                <div className="weather-info">
                    <div className="weather-info__item">
                        <span>Humidity: </span><span> {data.main.humidity}%</span>
                    </div>
                    <div className="weather-info__item">
                        <span>Pressure: </span><span> {data.main.pressure} mmHg</span>
                    </div>
                    <div className="weather-info__item">
                        <span>Wind speed: </span><span> {data.wind.speed} mi/hr</span>
                    </div>
                    <div className="weather-info__item">
                        <span>Wind deg: </span><span> {data.wind.deg}°</span>
                    </div>
                </div>
            </div>
        )
    }
}