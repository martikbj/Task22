const express = require('express'); 

var app = express(); 
var path = require('path'); 

function pet(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}
var data;
var data1 = new pet("Catte", 2, "cat");
var data2 = new pet("Catorz", 9000, "cat?");
var data3 = new pet("VOID", NaN, "???");
data = [data1, data2, data3];

app.get('/', (req, res) => {   
    res.sendFile(path.join(__dirname + '/hello.html')) 
}); 

app.get('/secret', (req, res) => {   
    res.sendFile(path.join(__dirname + '/secret.html')) 
}); 

app.get('/pictures', (req, res) => {   
    res.sendFile(path.join(__dirname + '/pictures.html')) 
}); 

app.get('/info', (req, res) => {   
    res.sendFile(path.join(__dirname + '/info.html')) 
}); 

app.get('/data', (req, res) => {   
for(var i = 0; i < data.length; i++){
    res.json(data)
} 
}); 
app.listen(process.env.PORT || 8080)