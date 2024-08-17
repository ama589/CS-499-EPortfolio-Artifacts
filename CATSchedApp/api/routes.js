

var express = require('express');
var router = express.Router();

/*
router.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'Origin','X-Requested-With,content-type');      
   // res.setHeader('Access-Control-Allow-Credentials', true);       
    next();
});

*/

//backend
router.get('/', (req,res) => res.send('Welcome to CatApp!'));
//route
router.get('/contacts', function(req,res){
    res.send('This is routing for CatApp contacts...');
});
router.get('/tasks', function(req,res){
    res.send('This is routing for CatApp tasks...');
});
router.get('/appointments', function(req,res){
    res.send('This is routing for CatApp appointments...');
});

//api
/*

var Contact = require('../models/contact');
var Task = require('./app/models/task');
var Appointment = require('./app/models/appoint');

Contact.methods(['get','put','post','delete']);
Contact.register(router,'/api/contacts');

Appointment.methods(['get','put','post','delete']);
Appointment.register(router,'/api/appointments');
*/



//get

router.get('/api/contacts', function(req,res){
    Contact.find().then(function(err, contacts){
        if(err){
            res.send(err);
        }
        res.json(contacts);
    });
});

router.get('/api/tasks', function(req,res){
    Task.find().then(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});
/*
router.get('/api/appointments', function(req,res){
    Appointment.find().then(function(err, appointments){
        if(err){
            res.send(err);
        }
        res.json(appointments);
    });
});

*/
//post
router.post('/api/contacts', function(req,res){
    console.log();
    var contact = new Contact(req.body);
    if(req.body.mode=="Save"){
        contact.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been saved"});
            }
        });
    };
    
 
});
//delete
router.delete('/api/contacts/:contact_id', function(req,res){
    Contact.remove({
        _id: req.params.contact_id
    }, function(err, bear){
        if(err){
            res.send(err);
        }
        res.json({message: 'success'});
    });
});

module.exports = router;