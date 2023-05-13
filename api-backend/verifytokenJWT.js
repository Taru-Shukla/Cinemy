import jwt from "jsonwebtoken"; 
//import User from './Models/User.js';

// export default function verifytoken(token){
// //getting token value fron header 
// //const authHeader = req.header.token;
// // const authHeader = req.body.token;
// // console.log(authHeader);
// if(authHeader){
//     const token = authHeader.split(" ")[1];
//     jwt.verifytoken(token, "tokenSecretKey", (Error, user) => {
//         if(Error) {
//             return "this token is not valid";
//         } else {
//             console.log("validation successfull for token");
//              req.user = user;
//              //next();
//         }
//     });

// } else {
//     return "you are not authenticated";
// }
// }


export default function verifytoken(token,next, actionperformer){

    jwt.verify(token, "tokenSecretKey", (Error, user) => {
        if(Error) {
            console.log(Error+"Invalid token");
            return false;
        } else {
            if(actionperformer.isAdmin){
                console.log("Valid token");
            next();
            return true;
         }
         else{
             console.log("validation token, but actionperformer not admin");
         } 
        }
    });
}







//module.exports = verifytoken;