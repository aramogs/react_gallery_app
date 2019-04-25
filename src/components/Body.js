import React, { Component } from 'react';
import axios from 'axios';

import Pictures from './Pictures';
import apiKey from '../config.js';

class Body extends Component {
  constructor() {
    super();
    //Declaring the state and empty array to store data
    this.state = {
      photos: [],
      loading: true,
      query: ''
    };
  }
  componentDidMount() {
    this.performSearch(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      query: nextProps.query,
      loading: true
    });
    this.performSearch(nextProps.query);
  }
  //Using the Flickr key as apiKey, and the query passed with props the link for flickr api is created
  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="photo-container">
          {
            {/*Loading message displayed, if the pictures are fetched the message disapears dn the pictures are shown */}
            (this.state.loading) ? <p>Loading...</p> : <Pictures data={this.state.photos} query={this.state.query} />
          }
        </div>
      </div>
    );
  }
}

export default Body;
