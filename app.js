const { json } = require('express');
const express = require('express');
const app = express();
// Base URL - Base URI
// End-point

let tasks = [
    {
        id: 1,
        title: "Task 1",
        status: "in-progress"
    }
];

// body parser
app.use(express.json());

// Request, result
// Development - Test - Production
app.get('/', function(req,res){
    // Function body
    res.send('Hello world - Ustech');
});

app.get('/app', function(req,res){
    res.send('/app endpoint');
});

app.get('/tasks', function(req,res){
    res.json(tasks);
});

app.post('/tasks', function(req,res){
    const task = req.body;
    tasks.push(task);
    res.send(tasks);
});

app.listen(3000);