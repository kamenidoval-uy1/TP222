const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/articlesController');

router.post('/articles', ctrl.create);
router.get('/articles', ctrl.getAll);
router.get('/articles/search', ctrl.search);
router.get('/articles/:id', ctrl.getOne);
router.put('/articles/:id', ctrl.update);
router.delete('/articles/:id', ctrl.delete);

module.exports = router;
