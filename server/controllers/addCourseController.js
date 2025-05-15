// import Course from '../models/Course'
// import { v2 as cloudinary } from 'cloudinary'


// // add course
// export const addCourse = async (req, res)=>{
//     try {
//         const {courseData} = req.body 
//         const imageFile = req.file 

//         if(!imageFile){
//             return res.json({success:false, message: 'Thumbnail not Added'})
//         }

//         const parsedCourseData = await JSON.parse(courseData)
//         parsedCourseData.teacher = teacherId
//         const newCourse = await Course.create(parsedCourseData)
//         const imageUpload = await cloudinary.uploader.upload(imageFile.path)
//         newCourse.courseThumbnail = imageUpload.secure_url
//         await newCourse.save()

//         res.json({success: true, message: 'Course Added'})
//     } catch (error){
//         res.json({success: false, message: error.message})
//     }
// }