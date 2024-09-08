import mongoose from 'mongoose';
const { Schema } = mongoose;

const bankSchema = new Schema({
    bankName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Bank', bankSchema);