const router = require("express").Router();

router.use("/thing", require("./thing"));

router.get("/", (req, res) => {
    res.json({"request": "successful", "version": "0.0.3", "environment": process.env.description});
});

module.exports = router;
