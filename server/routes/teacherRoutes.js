import express from 'express'
import { updateRoleTeacher } from '../controllers/teacherController.js'

const teacherRouter = express.Router()

//Add Teacher role

educatorRouter.get('/update-role', updateRoleTeacher)

export default teacherRouter;
