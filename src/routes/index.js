const { Router } = require('express');
const router = Router();
const img = require('../models/image');

router.get('/', (req, res) => {
    res.send('index page')
});

router.get('/upload', (req, res) => {
    res.render('upload')
});

router.post('/upload', async(req, res) => {
    const image = new img()
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimeType = req.file.mimeType;
    image.size = req.file.size;

    await image.save();

    res.redirect('/');
});

router.get('/image/:id', (req, res) => {
    res.send('Profile image')
})

router.get('/image/:id/delete', (req, res) => {
    res.send('Image deleted')
});

module.exports = router 