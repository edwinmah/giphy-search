import React, { Component } from 'react';
import Header from './components/header';
import SearchForm from './components/searchForm';
import MainContent from './components/mainContent';
import Footer from './components/footer';
import fetch from './fetch';
import {
  baseUrl,
  endpoint,
  defaultEndpoint,
  limit,
  offset,
  rating,
  lang,
  apiKey
} from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderStatus = this.renderStatus.bind(this);
  }

  componentDidMount() {
    // construct request URL
    const requestUrl = `${baseUrl}${defaultEndpoint}?api_key=${apiKey}&limit=${limit}&rating=${rating}`;
    
    // GET default data
    fetch(requestUrl)
      .then(gifs => {
        this.setState({
          data: gifs.data
        });
      })
  }

  handleChange(e) {
    this.setState({
      searchString: e.target.value,
      data: []
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    // construct request URL
    const requestUrl = `${baseUrl}${endpoint}?api_key=${apiKey}&q=${this.state.searchString}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`;

    // GET the data
    fetch(requestUrl)
      .then(gifs => {
        this.setState({
          data: gifs.data
        });
      })
  }

  renderStatus() {
    const { data, searchString } = this.state;
    if (data.length > 0) {
      return (
        <h2>
          <span className="quote">
            {(searchString !== '') ? `${searchString}` : `${defaultEndpoint}`}
          </span> GIFs!
        </h2>
      )
    } else if (data.length === 0 && searchString !== '') {
      return <h2>No <span className="quote">{`${searchString}`}</span> GIFs yet!</h2>
    }
  }

  renderContent() {
    const { data, searchString } = this.state;
    if (data.length > 0 && searchString !== 0) {
      return (
        data.map(gif => {
          return (
            <div
              className={`gif gif-${gif.id} col-xs-6 col-sm-4 col-md-3`}
              key={gif.id}>
              <img
                src={gif.images.original.url}
                alt={gif.title}
                className="img-responsive img-thumbnail" />
              <div className="gif-body">
                <h3>{gif.title}</h3>
                <time>
                  Posted on {new Date(gif.import_datetime)
                    .toDateString()}
                </time>
                <p><a href={gif.url}>View on Giphy</a></p>
              </div>
            </div>
          )
        })
      )
    }
  }

  render() {
    return (
      <div className="App">
        <a
          href="#content"
          className="sr-only">Skip to content</a>
        <Header />
        <SearchForm
          value={this.state.searchString}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          renderStatus={this.renderStatus} />
        <MainContent renderContent={this.renderContent} />
        <Footer />
      </div>
    );
  }
}

export default App;
