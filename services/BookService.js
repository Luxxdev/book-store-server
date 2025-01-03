const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json'))
}

function getBookByID(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))

    const newBooks = books.filter(book => book.id === id)[0]

    return newBooks
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newBooks = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBooks))
}

function changeBook(change, id) {
    let books = JSON.parse(fs.readFileSync("books.json"))
    const changeIndex = books.findIndex(book => book.id === id)

    const changes = { ...books[changeIndex], ...change }

    books[changeIndex] = changes

    fs.writeFileSync("books.json", JSON.stringify(books))
}

function deleteBookByID(id) {
    let books = JSON.parse(fs.readFileSync("books.json"))
    const newBooks = books.filter(book => book.id !== id)

    fs.writeFileSync("books.json", JSON.stringify(newBooks))

}

module.exports = { getAllBooks, getBookByID, insertBook, changeBook, deleteBookByID }