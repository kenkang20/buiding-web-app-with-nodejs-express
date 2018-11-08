const express = require('express');
const bookController = require('../controllers/bookController');
const bookService = require('../services/goodReadsService');

const bookRouter = express.Router();

function router(nav) {
    const { getIndex, getById, middleware } = bookController(bookService, nav);

    bookRouter.use(middleware);

    bookRouter.route('/')
        .get(getIndex);

    bookRouter.route('/:id')
        // .all((req, res, next) => {
        // })
        .get(getById);

    return bookRouter;
}

module.exports = router;
