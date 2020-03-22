const router = require("express").Router();
const main = require("./main");
const page2 = require("./page2")
const crud = require("./crud");
//const api = require("./api");

router.get("/", main);
router.get("/page2", page2);
router.get("/get/:id", crud.get);
router.post("/add", crud.add);
router.post("/update", crud.update);
router.get("/delete/:id", crud.delete);


module.exports = router;