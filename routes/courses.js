var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  const { data: courses } = req.body;

  courses.forEach((course) => {
    console.log(course);
  });

  res.status(200).send(req.body);
});

module.exports = router;
