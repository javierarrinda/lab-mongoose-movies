const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')
/* GET celebrities page */
// get celebrity
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((eachCelebrity) => {

      res.render('celebrities/index', {
        celebrities: eachCelebrity
      });
    })
    .catch((err) => {
      next(err)
    })
});

// create new celebrity
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
  Celebrity.create(req.body)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch((err) => {
      next(err);
    })
});


//getting the celebrities
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((eachOne) => {
      res.render('celebrities/show', {
        Stars: eachOne
      });
    })
    .catch((err) => {
      next(err)
    })
});

//delete celebrity .findByIdAndRemove

router.post('/celebrities/:id/delete', (req, res, next) => [
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch((err) => {
    next(err)
  })
]);

// edit the celebrities

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((theCelebrity) => {
      res.render('celebrities/edit', {
        theCelebrity: theCelebrity
      })
    })
    .catch((err) => {
      next(err)
    })
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/celebrities/' + req.params.id);
    })
    .catch((err) => {
      next(err)
    })
});



module.exports = router;
