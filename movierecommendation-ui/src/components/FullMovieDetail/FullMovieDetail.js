import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAddFavoriteMovie, fetchRemoveFavoriteMovie } from './../../../../utils/movieApi'

const addFavoritedMovie = (props) => {
  const { movie, movies, addMovietoFavorites, activeAccount, alertme, favoritesCounter, increaseFavCount } = props;

  fetchAddFavoriteMovie(movie, activeAccount.id)
    .then(res => {
      addMovietoFavorites(movie)
      increaseFavCount()
      alertme(genNotificationOpts('add_fav', movie));
    })
}

const removeFavoritedMovie = (props) => {
  const { movie, movies, addMovietoFavorites, activeAccount, alertme, notifications, favoritesCounter, decreaseFavCount } = props

  fetchRemoveFavoriteMovie(movie.movieId, activeAccount.id)
    .then(res => {
      addMovietoFavorites(movie);
      decreaseFavCount();
      let notifyReturn = alertme(genNotificationOpts('rem_fav', movie));
    })
}

const checkFavorite = (props) => {
  const { movie } = props;
  if (Object.keys(props.activeAccount).length === 0) {
    props.changeRoute('/signin')
  } else {
    movie.isFavorited ? removeFavoritedMovie(props) : addFavoritedMovie(props)
  }
}

const FullMovieDetail = (props) => {
  const selectedId = props.location.pathname.replace('/movie/', '')

  const selectedArray = props.movies.filter(movie =>
    movie.movieId == selectedId
  );
  const selectedMovie = selectedArray[0]
  const favClass = selectedMovie.isFavorited ? "favorite-movie-btn favorited-movie-active" : "favorite-movie-btn"

  return (
    <div className='movie-detail'
      onClick={(e) => {
        e.preventDefault();
        props.changeRoute(`/`);
      }}>
      <div className='button-container'>
        <button className={favClass}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          checkFavorite(props);
        }}
        ></button>
      </div>
      <h2>{selectedMovie.title}</h2>
      <img className='movie-poster-detail' src={`https://image.tmdb.org/t/p/w500${selectedMovie.posterImg}`} />
      <p>Released: {selectedMovie.releaseDate}</p>
      <p>Rating: {selectedMovie.voteAverage}</p>
      <p>Overview: {selectedMovie.description}</p>
    </div>
  )
}

export default withRouter(FullMovieDetail);


FullMovieDetail.propTypes = {
  notifications: React.PropTypes.array,
  props: PropTypes.object,
  props: PropTypes.shape({
    activeAccount: PropTypes.object,
    addMovietoFavorites: PropTypes.func,
    alertme: PropTypes.func,
    changeRoute: PropTypes.func,
    decreaseFavCount: PropTypes.func,
    favoritesCounter: PropTypes.number,
    increaseFavCount: PropTypes.func,
    movie: PropTypes.object,
    movies: PropTypes.array,
  })
};