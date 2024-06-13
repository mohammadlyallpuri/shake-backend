import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; 


// Define the Video schema
const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        // The field name is missing, let's assume it might be "videoUrl"
        videoUrl: { // Added missing field name
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true // Fixed the typo from 'requreid' to 'required'
        },
        views: { // Corrected 'viewss' to 'views'
            type: String,
            required: true // Fixed the typo from 'requreid' to 'required'
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true // Moved this object outside of the schema definition
    }
);


// Export the Video model
export const Video = mongoose.model("Video", videoSchema);
