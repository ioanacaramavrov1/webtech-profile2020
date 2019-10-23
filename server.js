const express = require('express')
const app = express()

//directorul din care vreau sa imi fie servite acele fisiere statice  (express.static)
//'/' directorul curent 
app.use('/', express.static('frontend'))
app.get('/hello', function (req, res) {
  res.send('Hello World')
})
 
app.get('/messages', function(request, response){
    // scriu o functie, ii dau lista de param
    // fac o vb sa stochez date - un array
    var messages = [];
    var message = {
        //asa fac un obiect in js
        //obiectele sunt asocieri de tipul cheie si valoare
        name: "Ioana",
        message : "Hello from the web"
    }
    //ca la stiva, pushez mesajul in array-ul messages
    messages.push(message);
    //coedul de status 200 asta inseamna ca e ok ce se intampla
    response.status(200).send(messages);
    //pasez obiectul messages 
    
})
app.listen(8080)