//write  schema
import mongoose, {Schema} from "mongoose"

const subscriptionSchema=new Schema({
    subscriber:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:ture})


export const Subscription=mongoose.model("Subscription")