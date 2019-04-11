var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", (req, res) => {
    burger.all(data => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res)=> {
    burger.createOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], (result) => {
        console.log(result);
        res.json({id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res)=> {
    var bool = `id = ${req.params.id}`;

    burger.updateOne({
        devoured: req.body.devoured
    }, bool, (result) => {
        if(result.changedRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end()
        }
    });
});
module.exports = router;