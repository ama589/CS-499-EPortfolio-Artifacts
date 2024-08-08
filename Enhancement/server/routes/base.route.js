const express = require('express');
const router = express.Router();

const Contact = require('..models/contacts');

router.get('/contacts',  (req, res,next)=> {
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});
router.post('/contact', (req,res,next)=>{
    let newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNum: req.body.phoneNum,
        address: req.body.address
    });
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Fail'});
        }
        else{
            res.json({msg: 'Added'});
        }
    });
});


module.exports = router;
