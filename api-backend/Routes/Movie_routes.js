import express from 'express';

import { COMMON_ROUTES, MOVIE_ROUTES  } from '../Constants/Routes.js';

import * as controller from '../Controller/Movie_controller.js'



export const movieRouter = express.Router();

movieRouter.get(MOVIE_ROUTES.GET_ALL_MOVIES, controller.getAllMovies);

movieRouter.get(MOVIE_ROUTES.GET_MOVIE_DETAILS,controller.getMovieDetails);

movieRouter.get(MOVIE_ROUTES.GET_RANDOM_MOVIE, controller.getRandomMovie);

movieRouter.post(MOVIE_ROUTES.ADD_NEW_MOVIE, controller.addNewMovie);

movieRouter.put(MOVIE_ROUTES.UPDATE_MOVIE,controller.updateMovie);

movieRouter.put(MOVIE_ROUTES.ADD_MOVIE_REVIEW,controller.addReview);

movieRouter.delete(MOVIE_ROUTES .DELETE_MOVIE,controller.removeMovie);

