const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/dbicc").then(() => {
    console.log("Database on!");
}).catch(err => console.log(err));

module.exports = mongoose;