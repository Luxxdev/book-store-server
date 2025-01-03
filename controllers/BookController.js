const { getAllBooks, getBookByID, insertBook, changeBook, deleteBookByID } = require("../services/BookService")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const book = getBookByID(id)
            res.send(book)
        }
        else {
            res.status(422).send('Invalid ID')
        }
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body

        if (req.body.name) {
            insertBook(newBook)
            res.status(201).send('Livro inserido')
        }
        else {
            res.status(422).send('O campo name é obrigatório')
        }
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const patch = req.body
        const id = req.params.id

        if (id && Number(id)) {
            changeBook(patch, id)
            res.status(201).send('Livro alterado')
        }
        else {
            res.status(422).send('Invalid ID')
        }
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteBookByID(id)
            res.status(201).send('Livro removido')
        }
        else {
            res.status(422).send('Invalid ID')
        }
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getBooks, getBook, postBook, patchBook, deleteBook }