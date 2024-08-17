var mongoose = require('mongoose');


//define contact model
module.exports = mongoose.model('Contact', {
    // _id: {type: ObjectId, default: ''},
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    phoneNum: {type: String, default: ''},
    emailAdd: {type: String, default: ''},
    physAdd: {type: String, default: ''}
});