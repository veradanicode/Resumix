const cloudinary =require('../config/cloudinary');

const uploadToCloudinary =async(filepath ,{folder="Resumix"} = {})=>{
    try {
        const result = await cloudinary.uploader.upload(filepath,{
            folder:"Resumix"
        });

        return {
            url:result.secure_url,
            publicId:result.public_id
        }

    } catch (error) {
        console.error("Error while uploading to Cloudinary!",error);
        throw new Error("Error while uploading to Cloudinary!")
    }
}

module.exports={
    uploadToCloudinary
};