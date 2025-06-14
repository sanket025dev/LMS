import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
// import adminController from './controllers/adminController.js'
import connectCloudinary from './configs/cloudinary.js'
import teacherRouter from './routes/teacherRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import {Server} from 'socket.io'

 
const app = express() 
app.use(cors())
app.use(clerkMiddleware())

// connect db
await connectDB()
await connectCloudinary()

//socket 
const io = new Server(_, {
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log("connected");

    socket.on("chat", chat=>{
        io.emit("chat",chat)
    })

    socket.on("disconnect",()=>{
        console.log("disconnect")
    })
})

// routes
app.get('/', (req, res) => res.send("API iss working"))
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/teachers', express.json(), teacherRouter)
// app.get('/admin/admins', adminController.getAdmins)

// ports
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})