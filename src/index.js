const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


//Initializations
const app = express();
require('./database')

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('image'));



//global variables



//routes
app.use(require('./routes/index'))


//static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(3000, () => {
    console.log(`Server on port ${app.get('PORT')}`)
})
