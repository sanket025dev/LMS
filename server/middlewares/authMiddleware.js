import { clerkClient } from "@clerk/express";

//protect teacher

export const protectTeacher = async (req,res,next) => {
    try {
        const userId = req.auth.userId
        const response = await clerkClient.users.getUser(userId)

        if(response.publicMetadata.role !== 'student'){
            return res.json({success:false, message: 'unauthoried Access'})
        }

        next()
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}