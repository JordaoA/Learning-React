/* 
    O método que atualiza o array de avaliações de uma aula
    foi criado com a ajuda de https://github.com/Gabrielomn
*/

const aulas = require('./models/Aula.js');
let d = new Date();
let dataAtual = d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear();
let updateAvaliacoes = (avaliacoes) => {

    aulas.find({ data:dataAtual }).then((res) => {
        let newArr = [];
        for (let i = 0; i < 4; i++){
            newArr[i] = avaliacoes[i] + res[0].avaliacoes[i];
         }
        
        aulas.updateOne({ data:d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear() }, { avaliacoes: newArr }).then((res) => {
            console.log('As avaliações da aula foram atualizadas.');
        })

    }).catch((err) => {
        new aulas({ data:dataAtual, avaliacoes:avaliacoes }).save().then((res) => {
            console.log('Nova avaliação de aula salva.');
        })
    })
}

module.exports = {
    updateAvaliacoes
};