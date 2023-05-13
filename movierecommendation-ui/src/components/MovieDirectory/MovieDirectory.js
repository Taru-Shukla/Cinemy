import React, { Component } from 'react';
import CardContainer from '../../../containers/MovieCard-container';
import PropTypes from 'prop-types';

import SearchResults from './SearchResults';

export default class MovieDirectory extends Component {
  constructor() {
    super();
  }
  state = {
    search: '',
    results: []
  }

  onChange = (e) => {
    this.setState({[e.target.name]: [e.target.value]})

    if(e.target.value !== '') {
      const key = '471d212907833bde6a872c6b03ecbfdb';
      fetch('https://api.themoviedb.org/3/search/movie?api_key=' + key + '&language=en-US&query=' + e.target.value + '&page=1&include_adult=false')
        .then(response => {
          if (response.status !== 200) {
            console.log('Error: ' + response.status);
            return;
          }
          response.json().then(data => {
            const results = data.results;
            this.setState({ results });
          });
        })
        .catch(err => {
          console.log('Fetch error :-S', err)
        })      
    }

    if(e.target.value === '') {
      this.setState({ results: []});
    }
  }

  render() {
    const { movies } = this.props
    const movieList = movies.map(movie =>
      <CardContainer key={movie.movieId}
        movie={movie}
      />
    )
    const imageLink = 'https://image.tmdb.org/t/p/w300';

    return (
      <div>
        <form className="searchContent">
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.search}
            className="searchBar"
            placeholder="Search a movie title..."
            name="search" required />
          <SearchResults results={this.state.results} />
        </form>
        <h2>Latest Releases</h2>
        <div className='movie-container'>
          {movieList}
        </div>
      </div>
    )
  }
}

MovieDirectory.propTypes = {
  notifications: React.PropTypes.array,
  props: PropTypes.object,
  props: PropTypes.shape({
    dispatch: PropTypes.func,
    movies: PropTypes.array,
  })
};