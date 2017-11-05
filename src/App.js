import React, { Component } from 'react';
import Header from './components/header';
import SearchForm from './components/searchForm';
import MainContent from './components/mainContent';
import Footer from './components/footer';
import styled from 'styled-components';
import { media } from './style-utils';
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

const AppEl = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",  Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  text-align: center;
`;

const StatusHeading = styled.h2`
  margin: 0;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const StatusQuote = styled.span`
  font-weight: 700;
  text-transform: capitalize;
`;

const SearchResult = styled.div`
  margin-bottom: 4rem;

  &:nth-child(2n+3) {
    clear: left;
  }

  ${media.sm`
    &:nth-child(2n+3) {
      clear: none;
    }

    &:nth-child(3n+4) {
      clear: left;
    }
  `}

  ${media.md`
    &:nth-child(3n+4) {
      clear: none;
    }

    &:nth-child(4n+5) {
      clear: left;
    }
  `}
`;

const SearchResultHeading = styled.h3`
  font-size: 1.5rem;
  line-height: 1.4;
`;

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
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(gifs => {
        this.setState({
          data: gifs.data
        });
      })
      .catch(error => console.log(error))
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
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(gifs => {
        this.setState({
          data: gifs.data
        });
      })
      .catch(error => console.log(error))
  }

  renderStatus() {
    const { data, searchString } = this.state;
    if (data.length > 0) {
      return (
        <StatusHeading>
          <StatusQuote className="quote">
            {(searchString !== '') ? `${searchString}` : `${defaultEndpoint}`}
          </StatusQuote> GIFs!
        </StatusHeading>
      )
    } else if (data.length === 0 && searchString !== '') {
      return <StatusHeading>No <StatusQuote className="quote">{`${searchString}`}</StatusQuote> GIFs yet!</StatusHeading>
    }
  }

  renderContent() {
    const { data, searchString } = this.state;
    if (data.length > 0 && searchString !== 0) {
      return (
        data.map(gif => {
          const postDate = new Date(gif.import_datetime);
          return (
            <SearchResult
              className={`gif gif-${gif.id} col-xs-6 col-sm-4 col-md-3`}
              key={gif.id}>
              <img
                src={gif.images.original.url}
                alt={gif.title}
                className="img-responsive img-thumbnail" />
              <div className="gif-body">
                <SearchResultHeading>
                  {gif.title}
                </SearchResultHeading>
                <time dateTime={postDate.toISOString()}>
                  Posted on {postDate.toDateString()}
                </time>
                <p><a href={gif.url}>View on Giphy</a></p>
              </div>
            </SearchResult>
          )
        })
      )
    }
  }

  render() {
    return (
      <AppEl className="App">
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
      </AppEl>
    );
  }
}

export default App;
