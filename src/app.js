import React, { Component } from 'react';
import CardList from './cardList';
import SearchBox from './searchbox';
import {robots} from './robots';
import { render } from '@testing-library/react';


class App extends Component {
    constructor()
    {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    onSearchChange = (event) =>
    {
        this.setState({searchField: event.target.value});
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return(           
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
};

export default App;

