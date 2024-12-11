const db = require("../db");

exports.addBooks = async(req, res) => {
    const {title, author, genre, isbn} = req.body;
    if (!title || !author || !genre || !isbn ) {
        return res.status(400).json({msg: "Enter all details"})
    }

   try {
     const book = await db('books').insert({ title, author, genre, isbn});
     if (!book) {
         res.status(401).json({ msg: "SOmething went wrong while addin book."})
     }
 
     res.status(200).json({msg : "Book added successfully"})
   } catch (error) {
    console.log(error)
   }
};

exports.getBooks = async (req, res) => {
    res.send("Hello Broo")
};

// module.exports = {
//     addBooks,
//     getBooks,
// }