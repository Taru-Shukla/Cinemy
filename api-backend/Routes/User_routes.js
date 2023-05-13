import express from 'express';

import {  USER_ROUTES  } from '../Constants/Routes.js';

import * as controller from '../Controller/User_controller.js'



export const userRouter = express.Router();

userRouter.get(USER_ROUTES.GET, controller.getAllUsers);

userRouter.post(USER_ROUTES.ADD_NEW, controller.addNewUser);

userRouter.put(USER_ROUTES.UPDATE,controller.updateUser);

userRouter.get(USER_ROUTES.GET_DETAILS,controller.getUserDetail);

userRouter.delete(USER_ROUTES .DELETE,controller.removeUser);
