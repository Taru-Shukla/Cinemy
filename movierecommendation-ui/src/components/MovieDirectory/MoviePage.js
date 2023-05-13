import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';

class MoviePage extends Component {
  state = {
    movie: {
      genres: [],
      videos: {
        results: []
      },
      recommendations: {
        results: []
      }
    }
  }

  getData = () => {
    const key = '471d212907833bde6a872c6b03ecbfdb';
    const movieId = window.location.pathname.substring(8);

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US&append_to_response=credits,videos,recommendations`)
    .then(response => {
      if (response.status !== 200) {
        console.log('Error: ' + response.status);
        return;
      }

      response.json().then(data => {
        const movie = data;
        this.setState({ movie });
      });

    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    })
  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.movie !== this.state.movie) {
      this.getData();
    }
  }
  
  render() {
    return (
      <div className="movieContainer">
        <Header />

        <div className="movieContent">
          <div className="moviePoster">
            <img src={this.state.movie.poster_path === null ? 'http://via.placeholder.com/640x960' : `https://image.tmdb.org/t/p/w640${this.state.movie.poster_path}`} alt={`${this.state.movie.title} poster`} className="movieImg" />
            <h2 className="movieTitle">{this.state.movie.title}</h2>
          </div>

          <section className="movieDetails">
            {this.state.movie.videos.results.length > 0 && 
              <div className="ytPlayer ytContainer16x9 ytContainer4x3">
                <iframe src={`https://www.youtube.com/embed/${this.state.movie.videos.results[0].key}`} title="movietrailer"></iframe>;
              </div>
            }
            <ul className="movieDetails">
              <li><span className="weight">Release date:</span> {this.state.movie.release_date}</li>
              <li><span className="weight">Rating:</span> {this.state.movie.vote_average}</li>

              <li><span className="weight">Genres: </span> {this.state.movie.genres.map((element, index) => {
                  if (index < this.state.movie.genres.length - 1) {
                    return this.state.movie.genres[index].name + ', '
                  } else {
                    return this.state.movie.genres[index].name
                  }
                })}
              </li>
              <li><span className="weight">Overview:</span> {this.state.movie.overview}</li>
              <li>
              </li>
            </ul>
            <div className="recommends">
              <div><span className="weight">Recommendations:</span></div> {this.state.movie.recommendations.results.map((element, index) => {
                    if (index < this.state.movie.recommendations.results.length) {
                      return (
                          <Link to={`/movies/${this.state.movie.recommendations.results[index].id}`}> 
                          <img src={this.state.movie.recommendations.results[index].poster_path === null 
                          ? 'http://via.placeholder.com/640x960' 
                          : `https://image.tmdb.org/t/p/w640${this.state.movie.recommendations.results[index].poster_path}`} 
                          alt={`${this.state.movie.recommendations.results[index].title} poster`} 
                          className="recommend"/></Link>
                      )
                    } else {
                      return this.state.movie.recommendations.results[index].title
                    }
                })}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default MoviePage