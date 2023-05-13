import User from "../Models/User.js";
import jwt from "jsonwebtoken";


/**
 * Search the tasks
 * @params {*} params
 * @returns []
 */

export const search = (params = {}) => {
    const promise = User.find(params).exec();
    return promise;
}

export const create = (user) => {
    const newUser = new User(user);
    console.log('create');
    return user.save();
}

export const get = async (request, response) => {
   // const {userName,userPassword}=request.params;
   const userName = request.params.userName;
   const userPassword = request.params.userPassword;
     const user= await User.find({'userName':userName,'userPassword':userPassword} ).clone();
        
     if(user){
         //getting access token through jwt
         const accessToken = jwt.sign({ id: user.id, isAdmin: user.isAdmin}, "tokenSecretKey",{
             expiresIn :"300s"
         });
        //  response.json({
        //      userName: user.userName,
        //      isAdmin: user.isAdmin,
        //      accessToken,
        //  }
        //  );
         return  user;

     }
     else{
         console.log("not dound");
     }
   
}

export const update = (user) => {
    user._id = user.id;
   // task.updatedDate = Date.now();
    const promise = User.findByIdAndUpdate(user.id,  user, { new: true }).exec();
    return promise;
}

export const updateStatus=(user)=>{
    user._id = user.id;
   // movie.updatedDate = Date.now();
    const promise = User.findByIdAndUpdate(user.id,  user, { new: true }).exec();
    return promise;
}
export const remove = (id) => {
    const promise = User.findByIdAndDelete(id).exec();
    return promise;
}

