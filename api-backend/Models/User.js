import  Mongoose  from "mongoose";

//creating schema to define the structure
const UserSchema = new Mongoose.Schema({
        userName:{
        type: 'String',
        require: "User Name is a required field"
    },
    
    userEmail:{
        type: 'String',
        require: " Email is a required field"
    },

    userPassword:{
        type: 'String',
        required: "true"
       
    },
    isAdmin:{
        type:'Boolean',
        required: "true"
    }

    
},


{
    versionKey: false
}
);
UserSchema.virtual('id', () => this._id.toHexString());
UserSchema.set('toJSON', {virtuals: true});

const User = Mongoose.model('User', UserSchema);



 export default User;