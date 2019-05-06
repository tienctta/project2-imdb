var express = require("express");
var router = express.Router();

router.use("/admin", require(__dirname + "/admin"));
//router.use("/imdbclone", require(__dirname + "/imdbclone"));

router.get("/", function(req, res){
    res.json({"keyvalue": "This is my HomePage"}); // truyen json de test
});

module.exports = router;