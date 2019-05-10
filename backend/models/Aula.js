const mongo = require('./database');

const AulaSchema = mongo.Schema({
    matricula: {
        type: String,
        require: true,
    },
    avaliacoes: {
        type: Array,
        require: true
    },
    data: {
        type: String,
        require: true,
    },
    textArea: {
        type: String,
        require: false
    }
});

mongo.model('aulas', AulaSchema);

const aulas = mongo.model('aulas');

module.exports = aulas;