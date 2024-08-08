var mongoose = require('mongoose');

//define task model
module.exports = mongoose.model('Task', {
    name: {type: String, default: ''},
    descrip: {type: String, default: ''},
    dueDate: {type: String, default: ''},
    comp: {type: Boolean, default: false}
});