import React from 'react'
import {getTheme} from '../utils/getTheme'
import {SearchBar} from './SearchBar'
import {ErrorBoundry} from '../services/ErrorBoundry'
import {WeatherPanel} from './WeatherPanel'

export class App extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: 'samara'
        }
    }
    selectCity = (city) => {
        this.setState({
            selected: city
        })
    }
    render() {
        return (
            <Container>
                <SearchBar onSelect={this.selectCity}/>
                <WeatherPanel selectedCity={this.state.selected}/>
            </Container>
        )
    }
}

const Container = (props) => {
    const theme = getTheme()
    return (
        <div className={`app ${theme}`}>
            <ErrorBoundry>
                {props.children}
            </ErrorBoundry>
        </div>
    )
}