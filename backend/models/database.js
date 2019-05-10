const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/dbicc", { useNewUrlParser: true }).then(() => {
    console.log("Banco de dados ON!");
}).catch(err => console.log(err));

module.exports = mongoose;