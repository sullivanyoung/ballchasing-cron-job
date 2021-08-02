const cron = require('node-cron');
const express = require('express');
var exec = require('child_process').exec, child;

app = express();

//Schedule task to be run on the server
cron.schedule('* * * * *', function(){
    console.log('inserting new data into database every minute');
    child = exec('node write.js');
})

app.listen(3000);