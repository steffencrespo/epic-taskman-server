var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('all available tasks', {
        id: 1,
        name: 'sample task',
        status: 'open',
        eventId: 11,
        date: 'jan 12 2019',
        userId: 1
    });
});

module.exports = router;