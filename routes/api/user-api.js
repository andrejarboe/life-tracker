const router = require("express").Router();
const db = require("../../models");

//create customer
router.post('/user-new', function(req, res) {
  db.User.create(req.body)
  .then(dbUser => res.json(dbUser))
  .catch(err => res.json(err))
});

module.exports = router;


