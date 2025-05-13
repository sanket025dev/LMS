import express from 'express'
import { addCourse } from '../controllers/addCourseController';
import upload from '../configs.multer.js';

const addCourseRouter = express.Router()

addCourseRouter.post('/add-course', upload.single('image'),addCourse)

export default addCourseRouter;