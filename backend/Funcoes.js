/* 
    O método que atualiza o array de avaliações de uma aula
    foi criado com a ajuda de https://github.com/Gabrielomn
*/

const aulas = require('./models/Aula.js');
let d = new Date();
let dataAtual = (d.getDate() < 9 ? "0" + d.getDate() : d.getDate()) + "/" + (d.getMonth() < 9 ? "0"+ (d.getMonth() + 1) : (d.getMonth() + 1)) + "/" + d.getFullYear();
let updateAvaliacoes = (avaliacoes, matricula, textArea) => {
    
    new aulas({ data: dataAtual, avaliacoes: avaliacoes, matricula: matricula, textArea: textArea }).save()
    .then(() => console.log("Avaliação de aula salva."))
    .catch(() => console.log("Ocorreu um erro!"));
}


module.exports = {
    updateAvaliacoes
};