const express = require('express');
const app = express();
const PORT = 9000;
const bodyParser = require('body-parser');
const funcao = require('./Funcoes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json(), function (req, res, next) {

    res.header("Allow", "OPTIONS, GET, POST");
    //res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept");
    next();

});


app.post('/salvaValores', (req, res) => {
    res.json(req.body.values);
    funcao.updateAvaliacoes(req.body.values, req.body.matricula, req.body.textArea);
});



app.listen(PORT, (req, res) => {
    console.log("SERVER ON");
});