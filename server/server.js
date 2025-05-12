import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'


const app = express() 
app.use(cors())

// connect db
await connectDB()


// routes
app.get('/', (req, res) => res.send("API iss working"))

// ports
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})