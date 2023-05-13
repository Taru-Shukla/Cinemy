import  Mongoose  from "mongoose";

//creating schema to define the structure
const MovieSchema = new Mongoose.Schema({
        movieName:{
        type: 'String',
        require: "Movie Name is a required field"
    },
    
    movieDescription:{
        type: 'String',
        require: " Description is a required field"
    },

    movieReleaseYear:{
        type: 'String',
        required: "true"
       
    },

    movieGenre:{
        type: 'String',
        required: "true"
    },
    movieLanguage:{
        type: 'String',
        required: "true"
    },

    movieActors:[{
        type: 'String',
        required: "true"
    }],

    movieDirector:{
        type: 'String',
        required: "true"
    },

    movieDuration:{
        type:'Number',
        required: "true"
    },

    movieUserRating:{
        type: 'Number',
        required: "true"
    },

    movieIsForKids:{
        type: 'Boolean',
        required: "true"
    },

    movieCertificate:{
        type: 'String',
        required: "true"
    },

    movieImage:{
        type: 'String'
    },

    movieTrailer:{
        type:'String',
       
    },

    movieUserReviews:{
        type: 'String',
    },

    movieIMDBRating:{
        type: 'String'
    }
},


{
    versionKey: false
}
);
MovieSchema.virtual('id', () => this._id.toHexString());
MovieSchema.set('toJSON', {virtuals: true});

const Movie = Mongoose.model('Movie', MovieSchema);



 export default Movie;