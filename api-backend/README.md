WebD Nov 29    
execute following lines    

1- npm init -y    
2- npm i express    
3- npm i mongoose      
4- npm i dotenv  
5-  add port connection  
6- add type: module in package.json  
7- port connection established   

Mongo atlas connection -->  
1- account created on mongo atlas  
2-  collection created for movies in Mongo atlas


WebD Nov 30
JWT -->   
1-  npm install jsonwebtoken  

WebD Dec 1
JWT -->  
1- access token is created for "isAdmin: true" by JWT.  
2- access token verification JWT is  created, it validated the token and verification is done for adding new movie and updating a movie by id.  
3- user login to get acess token done by => http://localhost:5001/users/getuserdetails => passing userName and userPassword in body.   

WebD Dec 2
JWT -->
1- access token verification is used for all CRUD on movies with user considered as Admin.  
2- A ramdom list of all movies is displayed based on the "is movie for kids" ||IF|| no recommendation criteron is selected by the user. This random list can be accessed by => http://localhost:5001/movies/randommovie?type=isforkids.   

webD Dec 4  
Fetch GET api to display list of all movies.  
ref- ASIGN -8    

<!-- const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://NetrA:<password>@cluster0.qbpdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); -->    
@NetraAwate