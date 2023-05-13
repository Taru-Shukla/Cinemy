import Movie from "../Models/Movie.js";

/**
 * Search the tasks
 * @params {*} params
 * @returns []
 */


export const search = (params = {}) => {
    const promise = Movie.find(params).exec();
    return promise;
}

export const create = (movie) => {
    const newMovie = new Movie(movie);
    console.log('create');
    return movie.save();
}

export const get = (id) => {
    const promise = Movie.findById(id).exec();
    return promise;
}

export const update = (movie) => {
    movie._id = movie.id;
   // task.updatedDate = Date.now();
    const promise = Movie.findByIdAndUpdate(movie.id,  movie, { new: true }).exec();
    return promise;
}
export const addReview =async (review,id,user,timeStamp)=>{ //METHOD TO GET UPDATE INTO DATABASE
console.log(review);
    try
    
    {
    //const updatedOrder= await Orders.Order.findByIdAndUpdate(id,update,{
    // new: true
    //})//findOneAndUpdate IS A MONGOOSE METHOD TO UPDATE ITEM IN DB
    const promise= Movie.updateOne(
    
    { _id: id },
    
   
    {$push: {movieUserReviews:{
        "review": review,"user":user ,"timeStamp":timeStamp
    } }},{new: true, upsert: true }).exec();
    
    return promise;
    
    }
    
    catch(err){}
    

    
    }

export const updateStatus=(movie)=>{
    movie._id = movie.id;
   // movie.updatedDate = Date.now();
    const promise = Movie.findByIdAndUpdate(movie.id,  movie, { new: true }).exec();
    return promise;
}
export const remove = (id) => {
    const promise = Movie.findByIdAndDelete(id).exec();
    return promise;
}