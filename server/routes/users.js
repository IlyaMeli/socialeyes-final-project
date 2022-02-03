const router =  require("express").Router();

router.get("/", (req, res) => {
  res.send("USER ROUTE!");
});

module.exports = router;
