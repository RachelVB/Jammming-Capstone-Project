import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.search);
  }

  handleTermChange(e) {
    this.setState({term: e.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={this.onSearch}>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;