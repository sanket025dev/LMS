import mongoose, { model } from "mongoose"

const adminModel = mongoose.model('admin', {
    userName: String,
    password: String,
    status: String,
    data: String,
});

module.exports = adminModel

adminModel.create({
    userName: 'admin-default',
    password: 'pass123',
    status: 'ACTIVE',
    data: new Date(),
})

