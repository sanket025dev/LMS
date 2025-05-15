import express from 'express'
import { addCourse, getTeacherCourses, updateRoleTeacher } from '../controllers/teacherController.js'
import { protectTeacher } from '../middlewares/authMiddleware.js'

const teacherRouter = express.Router()

//Add Teacher role

teacherRouter.get('/update-role', updateRoleTeacher)
teacherRouter.post('/add-course', upload.single('image'), protectTeacher, addCourse)
teacherRouter.get('/courses',protectTeacher, getTeacherCourses)

export default teacherRouter;
