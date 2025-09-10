const { uploadToCloudinary } = require('../helpers/cloudinary-helpers');
const Image =require('../models/image')

const ImageUpload =async(req,res)=>{
    try {
        //check if the file path exists
        if (!req.file) {
            return  res.status(401).json({
            success:false,
            message:"Image does not exists!"
        })
        }

        //upload to cloudinary
         const {url,publicId}= await uploadToCloudinary(req.file.path)

         //store url,publicId,UploadedUser in database
         const newImage =new Image({
            url,
            publicId
         })

         await newImage.save();

         res.status(201).json({
            success:true,
            message:"Image uploaded successfully!",
            image:newImage
         })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })
    }
}

module.exports={
    ImageUpload,
}