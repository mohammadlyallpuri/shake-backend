import mongoose from 'mongoose';
const { Schema } = mongoose;
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"   

// Define the User schema
const userSchema = new mongoose.Schema({
    username: { // Corrected the typo from 'usename' to 'username'
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: { // Corrected the typo from 'coverImgae' to 'coverImage'
        type: String
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    password: {
        type: String,
        required: [true, "Password is required"], // Fixed the typo 'requried'
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true // Moved this object outside of the schema definition
});

userSchema.pre("save",async function(next){
    if (!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function
(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName

        },
        process.evn.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }

    )

}



usseSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }           
    )
}

// Export the User model
export const User = mongoose.model('User', userSchema);
