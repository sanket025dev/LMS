import mongoose, { model } from "mongoose"


const adminSchema = new mongoose.Schema({
    userName: {type:String, required:true},
    password: {type:String, required:true},
    status: {type:String},
    type: {type:String},
    data: {type:String},
})

const adminModel = mongoose.model('admins', adminSchema)

export default adminModel;

adminModel.create({
    userName: 'admin-default',
    password: 'pass123',
    status: 'ACTIVE',
    type:'ADMIN',
    date: new Date(),
})

