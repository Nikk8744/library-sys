const { Router } = require("express");
const { getBooks, addBooks, getBooksByIsbn, deleteBook } = require("../controller/book");

const router = Router();

router.get("/get", getBooks);
router.get("/get/:isbn", getBooksByIsbn)
router.post("/", addBooks);

router.delete("/delete/:isbn", deleteBook);

module.exports = router;  
