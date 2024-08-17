const express = require('express');
const app = express();
var mongoose = require('mongoose');
const bodyparser = require("body-parser");
const cors = require('cors');
//set port
const port = 3000;

//config
var db = require('./config/db');
console.log("connecting--", db);
mongoose.connect(db.url);

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

//app.use('/api', require('./api/routes'));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'Origin','X-Requested-With,content-type');      
  //  res.setHeader('Access-Control-Allow-Credentials', true);       
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
const contact = require('./app/models/contact');

//get

app.get('/api/contacts', function(req,res){
    Contact.find().then(function(err, contacts){
        if(err){
            res.send(err);
        }
        else{
        res.json(contacts);
        }
    });
});

app.get('/api/tasks', function(req,res){
    Task.find().then(function(err, tasks){
        if(err){
            res.send(err);
        }
        else{
        res.json(tasks);
        }
    });
});


app.get('/api/appointments', function(req,res){
    Appointment.find().then(function(err, appointments){
        if(err){
            res.send(err);
        }
        else{
        res.json(appointments);
        }
    });
});


//post
app.post('/api/contacts', async(req,res)=>{
    
      // Create a Contact
      const contact = new Contact({
        id:mongoose.Types.ObjectId,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phoneNum : req.body.phoneNum,
        emailAdd : req.body.emailAdd,
        physAdd : req.body.physAdd
      });
    
      // Save Contact in the database
      contact
        .save(contact)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Contact."
          });
        });
  
});

app.post('/api/appointments', async(req,res)=>{
    
    // Create a appointment
    const appointment = new Appointment({
      date : req.body.date,
      attends : req.body.attends,
      descrip : req.body.descrip
      
    });
  
    // Save appointment in the database
    appointment
      .save(appointment)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Appoinment."
        });
      });

});


app.post('/api/tasks', async(req,res)=>{
    
    // Create a Task
    const task = new Task({
      name : req.body.name,
      descrip : req.body.descrip,
      dueDate : req.body.dueDate,
      comp: false
      
    });
  
    // Save Task in the database
    task
      .save(task)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the task."
        });
      });

});
//delete
app.delete('/api/contacts/:id?',async(req,res, next)=>{
  try {
  
    
    const id = req.query.id;
    const query = { _id:id };
    const result = await Contact.findOne(query);
      
    await result.deleteOne();
    if (result) {
        res.status(202).send();
    } else if (!result) {
        res.status(400).send();
    }
} catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(message);
    res.status(400).send(message);
}
    
});

app.delete('/api/appointments/:id?',async(req,res, next)=>{
  try {
  
    
    const id = req.query.id;
    const query = { _id:id };
    const result = await Appointment.findOne(query);
      
    await result.deleteOne();
    if (result) {
        res.status(202).send(`Removed an appointment`);
    } else if (!result) {
        res.status(400).send(`Failed to remove appointment`);
    }
} catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(message);
    res.status(400).send(message);
}
    
});


app.delete('/api/tasks/:id?',async(req,res, next)=>{
  try {
  
    
    const id = req.query.id;
    const query = { _id:id };
    const result = await Task.findOne(query);
      
    await result.deleteOne();
    if (result) {
        res.status(202).send(`Removed a task`);
    } else if (!result) {
        res.status(400).send(`Failed to remove task`);
    }
} catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(message);
    res.status(400).send(message);
}
    
});


app.listen(port, ()=> console.log('App listenting on port ${port}!'));