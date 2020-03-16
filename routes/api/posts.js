const router = require("express").Router();
const db = require("../models");

// Matches with "/api/posts" to get all posts
router.get("/", function (req, res) {
  db.Post
    .findAll({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

// Matches with "/api/posts/:id" to get Post by id
router.get("/:id", function (req, res) {
  db.Post
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

// Matches with /api/posts to create new Post
router.post("/", function (req, res) {
  db.Post
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})


module.exports = router;
