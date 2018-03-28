const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('events',
        {
            id: 1,
            name: 'sunday service',
            date: 'jan 18 2019',
            status: 'open'
        });
});

router.get('/all', (req, res, next) => {
    res.json([
        {
            id: 1,
            name: 'sunday service',
            date: 'jan 18 2019',
            status: 'open'
        },
        {
            id: 2,
            name: 'easter',
            date: 'may 21 2018',
            status: 'open'
        }
    ]);
});

router.post('/new', (req, res, next) => {
    res.json();
});

router.put('/:id', (req, res, next) => {
    res.json();
});

module.exports = router;