import { request, response } from 'express';
import * as movieService from '../Services/movieService.js';
import MovieSchema from '../Models/Movie.js';
import verifytoken from '../verifytokenJWT.js';
import Movie from '../Models/Movie.js';


const errorhandler = (response) => {
    //response.status(500);
    response.json({error: error.message});
};

const setSuccessResponse = (json, response) => {
    response.status(200);
    response.json(json);
}

//GET ALL
export const getAllMovies = async (request, response) => {
   try{
    const moviesAll = await movieService.search();
    setSuccessResponse(moviesAll, response);
   } catch(error) {
    response.status(500).json(error.message);
   }
  
};

//ADD NEW MOVIE
export const addNewMovie = async (request, response) => {
    // const addmovie = async()=>{
        try{
            const movie = new MovieSchema ({
                movieName: request.body.movieName,
                movieDescription: request.body.movieDescription,
                movieReleaseYear: request.body.movieReleaseYear,
                movieGenre: request.body.movieGenre,
                movieLanguage: request.body.movieLanguage,
                movieActors: request.body.movieActors.split(','),
                movieDirector: request.body.movieDirector,
                movieDuration:  request.body.movieDuration,
                movieUserRating:  request.body.movieUserRating,
                movieIsForKids:  request.body.movieIsForKids,
                movieCertificate:  request.body.movieCertificate,
                movieImage: request.body.movieImage,
                movieTrailer:  request.body.movieTrailer,
                movieUserReviews:  request.body.movieUserReviews,
                movieIMDBRating:  request.body.movieIMDBRating,
            });
           const newMovie = await movieService.create(movie);
           response.status(201).json(newMovie);
    } catch(error) {
        response.status(500).json(error.message);
    }
    //  }
    //  const authHeader = request.headers.token;
    //  const authToken = authHeader.split(" ")[1];
    //  console.log(authToken);
    //  const user = {"id":request.body.id, "isAdmin":request.body.isAdmin};
    //  verifytoken(authToken,addmovie,user);
    
    }

    
//GET MOVIE DETAILS
export const getMovieDetails = async (request, response) => {
    try{
        const id = request.params.id;
        const movie = await movieService.get(id);
        setSuccessResponse(movie, response);

    } catch (error){
        response.status(500).json(error.message);
    }
};

// export const changeStatus=async(request,response)=>{
//     try{
//         const id = request.params.id;
//         const task = {...request.body, id};

//         const updatedTask = await taskService.updateStatus(task);
         
//         setSuccessResponse(updatedTask, response);

//     } catch (error){
//         response.status(500).json(error.message);
//     }
// }


//UPDATE MOVIE
export const updateMovie = async (request, response) => {
    // const updatemovie = async() =>{
    try{
        const id = request.params.id;
        const updatedMovie = {...request.body, id};

        const update = await movieService.update(updatedMovie);
        setSuccessResponse(updatedMovie, response);

    } catch (error){
        response.status(500).json(error.message);
    }
//}
// const authHeader = request.headers.token;
//      const authToken = authHeader.split(" ")[1];
//      console.log(authToken);
//      const user = {"id":request.body.id, "isAdmin":request.body.isAdmin};
//      verifytoken(authToken,updatemovie,user);

};

//ADD MOVIE REVIEW
export const addReview = async(request, response)=>{
    try{
        const id = request.params.id;
        const review = request.body.review;
        const user=request.body.user; 
        const timeStamp=Date.now();
        const update = await movieService.addReview(review,id,user,timeStamp);
        setSuccessResponse(review, response);

    }catch (error){
        response.status(500).json(error.message);
    }

};

//REMOVE MOVIE
export const removeMovie = async (request, response) => {
    // const deletemovie = async() => {
    try{
        const id = request.params.id;
        const movie = await movieService.remove(id);
        setSuccessResponse({message : `Movie deleted`}, response);

    } catch (error){
        response.status(500).json(error.message);
    }
//}
// const authHeader = request.headers.token;
//      const authToken = authHeader.split(" ")[1];
//      console.log(authToken);
//      const user = {"id":request.body.id, "isAdmin":request.body.isAdmin};
//      verifytoken(authToken,deletemovie,user);

};


//DISPLAY RANDOM MOVIE WHEN SEARCH CRITERIA IS SKIPPED

export const getRandomMovie = async (request, response) => {
    const randommovie = async() => {
        const type = request.query.type;
        let movie;
    try{
        if (type === "isforkids"){
            movie = await Movie.aggregate([
                { $match: {movieIsForKids: true } },
                { $sample: {size: 30 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: {movieIsForKids: false } },
                { $sample: {size: 2 } },
            ]);
        }
        response.status(200).json(movie);

    } catch (error){
        response.status(500).json(error.message);
    }
}
const authHeader = request.headers.token;
     const authToken = authHeader.split(" ")[1];
     console.log(authToken);
     const user = {"id":request.body.id, "isAdmin":request.body.isAdmin};
     verifytoken(authToken,randommovie,user);

};