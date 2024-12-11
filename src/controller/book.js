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

    try {
        const books = await db('books').select("*");
        if (!books) {
            res.status(401).json({msg: "Something went wrong while fetching books!!"})
        }
        res.status(200).json({
            books,
            msg: "Books fetched successfully"
        });
    } catch (error) {
        console.log(error)
    }
};
exports.getBooksByIsbn = async (req, res) => {
    const { isbn } = req.params;
    if (!isbn) {
        return res.status(400).json({msg: "Enter the isbn bumber"})
    }    

    const book = await db('books').where({isbn}).select("*");

    return res.status(200).json({
        book,
        msg: "Book fetched successfully"
    })
}

exports.editBook = async (req, res) => {
    // take the isbn number from params as its unique
    const { isbn } = req.params;
}

exports.deleteBook = async (req, res) => {
    const { isbn } = req.params;

    const book = await db('books').where({isbn}).select("*");
    if (book.length === 0) {
        return res.status(404).json({msg: "Np such book found!!"})
    }
    
    const deletedBook = await db('books').where({isbn}).del();
    if (!deletedBook) {
        return res.status(401).json({msg: "Something went wrong while deleting book!!"})
    } 

    return res.status(200).json({ msg: "Book deleted"})
}

// module.exports = {
//     addBooks,
//     getBooks,
// }