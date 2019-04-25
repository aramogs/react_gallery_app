import React, { Component } from 'react';
import Body from './Body'

export default class Search extends Component {
    state = {
        query: 'Trees'
    }
    onSearchChange = e => {
        this.setState({ query: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ query: this.state.query });
        e.currentTarget.reset();
    }
    render() {
        return (
            <div>
                {/*Search animation https://codepen.io/menelaosly/pen/rZddyb */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
                <form onSubmit={this.handleSubmit}>
                    <input className="search" type="search" onChange={this.onSearchChange} placeholder="Search..." />
                    <i className="fa fa-search"></i>
                </form>
                <h3>{this.state.query}</h3>
                <Body query={this.state.query} api={this.props.api} />
            </div>
        )
    }
}