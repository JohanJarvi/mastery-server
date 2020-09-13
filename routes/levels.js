var express = require("express");
var router = express.Router();

/* Connect to Mongo DB */
var MongoClient = require("mongodb").MongoClient;

/* GET home page. */
router.get("/", function (req, res, next) {
  MongoClient.connect("mongodb://localhost:27017/mastery", function (
    err,
    client
  ) {
    if (err) throw err;
    var db = client.db("mastery");

    db.collection("levels")
      .find()
      .toArray(function (err, result) {
        if (err) throw err;

        res.send(result);
      });
  });
});

module.exports = router;
