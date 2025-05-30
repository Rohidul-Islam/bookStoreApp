import mongoose from "mongoose";

const userScheme=mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },

})

    const User=mongoose.model("User", userScheme);
    export default User;