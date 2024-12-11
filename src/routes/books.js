const { Router } = require("express");
const { getBooks, addBooks } = require("../controller/book");

const router = Router();

router.get("/get", getBooks);

router.post("/", addBooks);

module.exports = router;  
