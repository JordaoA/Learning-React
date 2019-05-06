const mongo = require('./database');

const AulaSchema = mongo.Schema({
    avaliacoes: {
        type: Array,
        require: true
    },
    data: {
        type: Date,
        require: true,
        unique: true
    }
});

mongo.model('aulas', AulaSchema);

const aulas = mongo.model('aulas');

module.exports = aulas;