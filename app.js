//require the package and storing it in the express variable

const express = require('express');
//calling express and storing its value in a variable
const app = express();

//rounting any traffic going to the root url and sending back a response
app.get('/', function(request, response){
    response.send("Landing page!!!");    
});

//reounting any traffic that going/about and sending a request 
app.get('/oof', function(req, res){
    res.send("your in my about me page. you better turn back boi.")
})
// app is listening for a request on port 3000
app.listen(3000);

// checks if it is up
console.log("Server is live and on port 3000....");