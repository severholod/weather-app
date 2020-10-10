import React from 'react'

export class SearchBar extends React.Component {

    constructor() {
        super()
        this.state = {
            city: ''
        }
    }
    cityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSelect(this.state.city.toLowerCase())
        this.setState({
            city: ''
        })
    }

    render() {
        return (
            <div className="search-bar">
                <form action="#" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Search city..." onChange={this.cityChange} value={this.state.city}/>
                    <button></button>
                </form>
            </div>
        )
    }
}