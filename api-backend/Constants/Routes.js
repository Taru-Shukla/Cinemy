export const COMMON_ROUTES = {
    BASE_ROUTE: '/',
    API: '/api',
    };
    
    
    
    export const APP_ROUTES = {
    MOVIES: '/movies',
    
    };
    
    
    
    export const MOVIE_ROUTES = {
    
    ADD_NEW_MOVIE: '/addnewmovie',
    DELETE_MOVIE :'/deletemovie/:id',
    UPDATE_MOVIE : '/updatemovie/:id',
    ADD_MOVIE_REVIEW :"/addreview/:id",
    GET_MOVIE_DETAILS : "/getmoviedetails/:id",
    GET_ALL_MOVIES :  '/getmovie',
    GET_RANDOM_MOVIE: '/randommovie'
    };

    
export const APP_ROUTES_USER = {
        USERS: '/users',
        
        };
        
        
        
        export const USER_ROUTES = {
        
        ADD_NEW: '/addnewuser',
        DELETE :'/deleteuser/:id',
        UPDATE : '/updateuser/:id',
        GET_DETAILS : "/getuserdetails/:userName/:userPassword",
        GET :  '/getuser',
        
        };
