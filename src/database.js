const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/finterest')

    .then(db => console.log(`DB is connectec`))
    .catch(err => console.error(err))