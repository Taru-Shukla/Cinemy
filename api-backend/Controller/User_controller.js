import { request, response } from 'express';
import * as userService from '../Services/userService.js';


import UserSchema from '../Models/User.js';


const errorhandler = (response) => {
    //response.status(500);
    response.json({error: error.message});
};

const setSuccessResponse = (json, response) => {
    response.status(200);
    response.json(json);
}

export const getAllUsers = async (request, response) => {
   try{
    const usersAll = await userService.search();
    setSuccessResponse(usersAll, response);
   } catch(error) {
    response.status(500).json(error.message);
   }
  
};

export const addNewUser = async (request, response) => {
    try{
        const user = new UserSchema ({
            userName: request.body.userName,
            userEmail: request.body.userEmail,
            userPassword: request.body.userPassword,
            isAdmin: request.body.isAdmin,
            
        });
        // const task = {...request.body};
        // const newTask = await taskService.create(task);
        // setSuccessResponse(newTask, response);
        const newUser = await userService.create(user);
        response.status(201).json(newUser);
} catch(error) {
    response.status(500).json(error.message);
}};

export const getUserDetail = async (request, response) => {
    try{
        //const id = request.params.id;
        const userName=request.params.userName;
        const userPassword=request.params.userPassword;
        const user = await userService.get(request);
        setSuccessResponse(user, response);

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

export const updateUser = async (request, response) => {
    try{
        const id = request.params.id;
        const updatedUser = {...request.body, id};

        const update = await userService.update(updatedUser);
        setSuccessResponse(updatedUser, response);

    } catch (error){
        response.status(500).json(error.message);
    }
};

export const removeUser = async (request, response) => {
    try{
        const id = request.params.id;
        const user = await userService.remove(id);
        setSuccessResponse({message : `User deleted`}, response);

    } catch (error){
        response.status(500).json(error.message);
    }
};