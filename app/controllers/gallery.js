const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


module.exports = (app) => {
  app.use('/gallery', router);
};

router.get('/', (req, res, next) => {
    res.render('gallery', {
      title: 'Kodus - Conseil en menuiserie Aluminium'
    });
});
