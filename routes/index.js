const router = require("express").Router();
const main = require("./main");
const update= require ("./update");
const edit = require("./edit");
const crud = require("./crud");


router.get("/", main);
router.get("/edit", edit);
router.get("/edit/:id", update);
router.get("/get/:id", crud.get);
router.post("/add", crud.add);
router.post("/update/:id", crud.update);
router.get("/delete/:id", crud.delete);
router.get("/getServises/:id", crud.getServises);
<<<<<<< HEAD
//router.get("/getRecordByDate/:date", crud.getRecordByDate);
=======
router.get("/getRecordByDate/:date", crud.getRecordByDate, main);
>>>>>>> Develop


module.exports = router;