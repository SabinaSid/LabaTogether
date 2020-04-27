const router = require("express").Router();
const main = require("./main");
const edit = require("./edit")
const crud = require("./crud");
//const api = require("./api");

router.get("/", main);
router.get("/edit", edit);
router.get("/get/:id", crud.get);
router.post("/add", crud.add);
router.post("/update", crud.update);
router.get("/delete/:id", crud.delete);
router.get("/getServises/:id", crud.getServises);


module.exports = router;