import mongoose from 'mongoose'
import express from 'express';
import {movieRouter} from '../Routes/Movie_routes.js';
import { userRouter } from '../Routes/User_routes.js';
import {MongoClient} from 'mongodb';
import { APP_ROUTES ,APP_ROUTES_USER} from '../constants/routes.js';
import cors from 'cors';

const uri = "mongodb+srv://NetrA:Cinemy@9999@cluster0.qbpdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app=express();

var router = express.Router();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}));



app.use(APP_ROUTES.MOVIES, movieRouter);
app.use(APP_ROUTES_USER.USERS, userRouter);

//trs


mongoose

.connect('mongodb+srv://NetrA:OD3nHrZgRAVipZH4@cluster0.qbpdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

{

useNewUrlParser:true,

useUnifiedTopology:true,

}

)

.then(()=>{console.log('Connection is Successful');});




const db=mongoose.connection

db.on('error',(error)=>{console.error(error)})

db.once('open',()=>{console.log('Connected to database')});



export default app;