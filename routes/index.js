const router = require("express").Router();
const main = require("./main");
const crud = require("./crud");
const api = require("./api");

router.get("/", main);
router.get("/get/:id", crud.get);
router.post("/add", crud.add);
router.post("/update", crud.update);
router.get("/delete/:id", crud.delete);

router.get("/api", api.info);
router.get("/api/tasks", api.auth, api.get);
router.post("/api/tasks", api.auth, api.add);

module.exports = router;