const router = require("express").Router();
const main = require("./main");
const edit = require("./edit")
const crud = require("./crud");


router.get("/", main);
<<<<<<< HEAD
router.get("/edit/", edit);
=======
router.get("/edit", edit);
router.get("/edit/:id", edit);
>>>>>>> Maria
router.get("/get/:id", crud.get);
router.post("/add", crud.add);
router.post("/update", crud.update);
router.get("/delete/:id", crud.delete);
router.get("/getServises/:id", crud.getServises);


module.exports = router;