import mongoose from "mongoose";

// db conect

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('DB Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/LMS`)
}

export default connectDB