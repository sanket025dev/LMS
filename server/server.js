import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'


const app = express() 
app.use(cors())

// connect db
await connectDB()


// routes
app.get('/', (req, res) => res.send("API iss working"))
app.post('/clerk', express.json(), clerkWebhooks)

// ports
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})