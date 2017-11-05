import React from 'react';
import styled from 'styled-components';
import { media } from '../style-utils';

const SearchFormEl = styled.form`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  background-color: #e4e4e4;
`;

const SearchFormGroup = styled.div`
  margin-bottom: 2rem;

  ${media.sm`
    margin-bottom: 0;
  `}
`;

export default function SearchForm(props) {
  return (
    <div>
      <SearchFormEl
        className="search"
        value={props.searchString}
        onChange={e => props.handleChange(e)}
        onSubmit={e => props.handleSubmit(e)}>
        <div className="container">
          <div className="col-sm-6 col-sm-offset-3 form-row">
            <SearchFormGroup className="col-sm-10 form-group">
              <label
                className="sr-only"
                htmlFor="search">Search Giphy</label>
              <input
                id="search"
                className="form-control input-lg"
                type="text"
                placeholder="Search Giphy..." />
            </SearchFormGroup>
            <div className="col-sm-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg">Search</button>
            </div>
          </div>
        </div>
      </SearchFormEl>
      <div className="status container">
        <div className="row">
          {props.renderStatus()}
        </div>
      </div>
    </div>
  )
} 