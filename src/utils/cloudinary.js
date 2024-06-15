import {v2 as cloudinary} from "cloudinary"

import js from "js"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath)return null
        //upload on Cloudinary
      const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
    })
    //file has  been uplaoded successfully
    // console.log("file is uploaded on cloudinary",
    // response.url
    
     fs.unlikeSync(localFilePath)
        return response
        
    } catch (error) {
       fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation got failed 
       return null;
        
    }
}


    cloudinary.v2.uploader.uploader("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
        {public_id:"olympic_flag"},
        function(error,result){console.log(result);})


export {uploadOnCloudinary} 
    