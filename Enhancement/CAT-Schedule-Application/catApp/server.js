const express = require('express');
const app = express();
var mongoose = require('mongoose');
const bodyparser = require("body-parser");
//set port
const port = 3000;

//config
var db = require('./config/db');
console.log("connecting--", db);
mongoose.connect(db.url);

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//app.use('/api', require('./api/routes'));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'Origin','X-Requested-With,content-type');      
   // res.setHeader('Access-Control-Allow-Credentials', true);       
    next();
});

app.get('/', (req,res) => res.send('Welcome to CatApp!'));
//route
app.get('/contacts', function(req,res){
    res.send('This is routing for CatApp contacts...');
});
app.get('/tasks', function(req,res){
    res.send('This is routing for CatApp tasks...');
});
app.get('/appointments', function(req,res){
    res.send('This is routing for CatApp appointments...');
});

//api


var Contact = require('./app/models/contact');
var Task = require('./app/models/task');
var Appointment = require('./app/models/appoint');

//get

app.get('/api/contacts', function(req,res){
    Contact.find().then(function(err, contacts){
        if(err){
            res.send(err);
        }
        res.json(contacts);
    });
});

app.get('/api/tasks', function(req,res){
    Task.find().then(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});


app.get('/api/appointments', function(req,res){
    Appointment.find().then(function(err, appointments){
        if(err){
            res.send(err);
        }
        res.json(appointments);
    });
});


//post
app.post('/api/contacts', async(req,res)=>{
    console.log();
    var contact = new Contact(req.body);
   // const result = await collections?.contacts?.insertOne(contact);


});
//delete
app.delete('/api/contacts/:contact_id', function(req,res){
    Contact.remove({
        _id: req.params.contact_id
    }, function(err, bear){
        if(err){
            res.send(err);
        }
        res.json({message: 'success'});
    });
});



app.listen(port, ()=> console.log('App listenting on port ${port}!'));