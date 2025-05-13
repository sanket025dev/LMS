import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseTitle: {type: String, required:true},
    courseDescription: {type: String, required: true},
    courseThumnail:{type: String},
    coursePrice: { type: Number, required: true},
    isPublished: { type: Boolean, default: true},
    discount: {type: Boolean, required: true, min: 0, max: 100},
    teacher: {type: String, required: true},
    enrolledStudents: [
        {type:String, ref: 'User'}
    ],
}, {timestamps: true, minimize: false})

const Course = mongoose.model('Course', courseSchema)

export default Course;