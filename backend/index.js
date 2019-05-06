const express = require('express');
const app = express();
const aulas = require('./models/Aula')
const PORT = 9000;



var d = new Date();
app.listen(PORT, (req, res) => {
    /*
    new aulas({
        avaliacoes:[1,2,3,4,5],
        data: d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear()
    }).save().then(() => console.log('aula salva'))
    */
    aulas.find({data: d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear()}).then(res => console.log(res))
    console.log("SERVER ON");
})

app.post('/salvaValores', (req, res) => {
    console.log("teste");
});