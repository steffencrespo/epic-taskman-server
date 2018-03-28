const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('tasks', {
        id: 1,
        name: 'sample task',
        status: 'open',
        eventId: 11,
        date: 'jan 12 2019',
        userId: 1
    });
});

router.get('/all', (req, res, next) => {
    res.json([
        {
            id: 1,
            name: 'sample task',
            status: 'open',
            eventId: 11,
            date: 'jan 12 2019',
            userId: 1
        },
        {
            id: 2,
            name: 'sample task 2',
            status: 'open',
            eventId: 11,
            date: 'jan 12 2019',
            userId: 1
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