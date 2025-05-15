import { clerkClient } from '@clerk/express'
import Course from '../models/Course.js'
import { v2 as cloudinary } from 'cloudinary'

// update role

export const updateRoleTeacher = async (req,res) => {
    try{
        const userId = req.auth.userId 
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role:'student',
            }
        })
        res.json({success: true, message: 'you can publish a course now'})
    } catch (error){
        res.json({success: false, message: error.message})
    }
}

//add course

export const addCourse = async (req, res)=>{
    try {
        const { courseData } = req.body 
        const imageFile = req.file 
        const teacherId = req.auth.userId

        if(!imageFile){
            return res.json({success:false, message: 'Thumbnail not Added'})
        }

        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.teacher = teacherId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save()

        res.json({success: true, message: 'Course Added'})
    } catch (error){
        res.json({success: false, message: error.message})
    }
}

//get courses

export const getTeacherCourses = async (req, res) =>{
    try {
        const teacher = req.auth.userId
        const courses = await Course.find({teacher})
        res.json({ success: true, courses })
    } catch (error) {
        res.json({ success: false, message: error.message})
    }
}