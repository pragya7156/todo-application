const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const addtask = require('./tasks/addtask');
const updatetask = require('./tasks/updatetask');
const deletetask = require('./tasks/deletetask');
const gettask = require('./tasks/gettask');
const PORT = process.env.PORT||8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/add', addtask);
app.put('/update/:id', updatetask);
app.delete('/delete/:id', deletetask);
app.get('/get', gettask);

app.listen(PORT, async ()=>{
    console.log('server started at '+ PORT);
});