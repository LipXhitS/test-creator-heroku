const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.get('/question', function(req, res, next) {
      db.query(
          'SELECT * FROM questions',
          (error, results) => {
              if(error) {
                console.log(error);
                res.status(500).json({status: 'error'});
              } else {
                res.status(200).json(results);
              }
          }
      );
  });

  router.get('/choices', function(req, res, next) {
      db.query(
        'SELECT * FROM choices',
        (error, results) => {
          if(error) {
            console.log(error);
            res.status(500).json({status: 'error'});
          } else {
            res.status(200).json(results);
          }
        }
      );
  });

  router.get('/answers', function(req, res, next) {
      db.query(
        'SELECT * FROM answers',
        (error, results) => {
          if(error) {
            console.log(error);
            res.status(500).json({status: 'error'});
          } else {
            res.status(200).json(results);
          }
        }
      );
  });

  return router;
}

module.exports = createRouter;