const aulas = require('./models/Aula.js')
let d = new Date()
let currDate = d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear()
let updateAvaliacoes = (avaliacoes) =>{

    aulas.find({data:currDate}).then((res) =>{
        let newArr = []
        for(let i = 0; i < 4; i++){
            newArr[i] = avaliacoes[i]+res[0].avaliacoes[i];
         }
        
        aulas.updateOne({data:d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear()},{avaliacoes:newArr}).then((res)=>{
            console.log('aula atualizada')
        })

    }).catch((err)=>{
        new aulas({data:currDate, avaliacoes:avaliacoes}).save().then((res) => {
            console.log('nova avaliação de aula salva')
        })
    })

}

module.exports = {
    updateAvaliacoes
}