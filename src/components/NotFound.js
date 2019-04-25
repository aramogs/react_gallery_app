import React, { Component } from 'react';

//Displays a not found message
class NotFound extends Component {
    render() {
        return (
            <div className="notfound">
                <h3>404 Not Found :(</h3>
                <p>Please try again</p>
            </div>
        )
    }
}
export default NotFound;