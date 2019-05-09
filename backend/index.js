const express = require('express');
const app = express();
const aulas = require('./models/Aula')
const PORT = 9000;



var d = new Date();

app.use(express.json(), function(req, res, next) {
    res.header("Allow", "OPTIONS, GET, POST");
    //res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept");
    //console.log(res);
    next();
});


app.post('/salvaValores', (req, res, next) => {
    //let a = (res.json(req.body.values));
    //console.log(res.json(req.body));
    res.json(req.body.values);
    console.log(req.body.values);
    new aulas({
        avaliacoes: req.body.values,
        data: d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear()
    }).save().then(() => console.log('aula salva'))
    //console.log(a);
    //res.send(req.body.values);
});



app.listen(PORT, (req, res) => {
    /*
    new aulas({
        avaliacoes:[1,2,3,4,5],
        data: d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear()
    }).save().then(() => console.log('aula salva'))
    */
    
    //aulas.find({data: d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear()}).then(res => console.log(res))
    console.log("SERVER ON");
});