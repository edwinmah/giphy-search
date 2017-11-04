import React from 'react';

export default function SearchForm(props) {
  return (
    <div>
      <form
        className="search"
        value={props.searchString}
        onChange={e => props.handleChange(e)}
        onSubmit={e => props.handleSubmit(e)}>
        <div className="container">
          <div className="col-sm-6 col-sm-offset-3 form-row">
            <div className="col-sm-10 form-group">
              <label
                className="sr-only"
                htmlFor="search">Search Giphy</label>
              <input
                id="search"
                className="form-control input-lg"
                type="text"
                placeholder="Search Giphy..." />
            </div>
            <div className="col-sm-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg">Search</button>
            </div>
          </div>
        </div>
      </form>
      <div className="status container">
        <div className="row">
          {props.renderStatus()}
        </div>
      </div>
    </div>
  )
} 