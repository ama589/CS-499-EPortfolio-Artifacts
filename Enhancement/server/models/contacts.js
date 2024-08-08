const mongoose = reequire('mongoose');

const ContactSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true       
    },
    lastName:{
        type: String,
        required: true
    },
    phoneNum:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema)