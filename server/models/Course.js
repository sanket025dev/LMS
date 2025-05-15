import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    lectureId: {type: String, requried: true},
    lectureTitle: {type: Number, required:true},
    lectureDuration: {type: String, required:true},
    lectureURL: {type: String, requried:true},
    isPreviewFree: {type: Boolean, required: true},
    lectureOrder: {type: Number, required:true}
}, {_id: false});

const chapterSchema = new mongoose.Schema({
    chapterId: {type: String, requried: true},
    chapterOrder: {type: Number, required:true},
    chapterTitle: {type: String, required:true},
    chapterContent: [lectureSchema]
}, {_id: false});

const courseSchema = new mongoose.Schema({
    courseTitle: {type: String, required:true},
    courseDescription: {type: String, required: true},
    courseThumnail:{type: String},
    coursePrice: { type: Number, required: true},
    isPublished: { type: Boolean, default: true},
    discount: {type: Boolean, required: true, min: 0, max: 100},
    courseContent: [chapterSchema],
    teacher: {type: String, required: true},
    enrolledStudents: [
        {type:String, ref: 'User'}
    ],
}, {timestamps: true, minimize: false})

const Course = mongoose.model('Course', courseSchema)

export default Course;