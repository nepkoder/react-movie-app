import React, { Component } from 'react'
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        value:''
    };

    timeout = null;
    doSearch = (event) => {
        this.setState({
            value: event.target.value
        });
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value);
        },200);
    }

    render() {
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <input type="text" className="rmdb-searchbar-input" placeholder="Search" 
                    value={this.state.value}
                    onChange={this.doSearch}
                    />
                </div>
            </div>
        )
    }

}


export default SearchBar;