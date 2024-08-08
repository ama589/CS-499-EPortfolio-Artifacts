var mongoose = require('mongoose');

//define appointment model
module.exports = mongoose.model('Appointment', {
    date: {type: String, default: ''},
    attends: {type: String, default: ''},
    descrip: {type: String, default: ''}
    
});