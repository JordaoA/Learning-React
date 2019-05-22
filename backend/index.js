const express = require('express');
const aulas = require('./models/Aula');
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


app.get('/pegaValores', (req, res1) => {
    console.log("Dados recuperados");
    const t = req.query.data;
    console.log(t);
    //let d = new Date();
    //let dataAtual = (d.getDate() < 9 ? "0" + d.getDate() : d.getDate()) + "/" + (d.getMonth() < 9 ? "0"+ (d.getMonth() + 1) : (d.getMonth() + 1)) + "/" + d.getFullYear();
    aulas.find( {data : t } ).then(res => {
        let a = [0, 0, 0, 0];
        let arr = res.map((obj) => {return { notas: obj.avaliacoes }});
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].notas.length; j++) {
                a[j] += arr[i].notas[j];
            }
        }
        res1.send(a);
    })
})

app.listen(PORT, (req, res) => {
    console.log("SERVER ON");
});