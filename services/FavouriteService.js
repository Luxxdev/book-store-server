const fs = require("fs")

function getAllFavourites() {
    return JSON.parse(fs.readFileSync('favourites.json'))
}

function insertFavourite(id) {
    const favourites = JSON.parse(fs.readFileSync("favourites.json"))
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newFavouriteBook = books.find(book => book.id === id)
    const newFavouritesList = [...favourites, newFavouriteBook]

    fs.writeFileSync("favourites.json", JSON.stringify(newFavouritesList))
}

function deleteFavouriteByID(id) {
    const books = JSON.parse(fs.readFileSync('favourites.json'))
    const filteredBooks = books.filter(book => book.id !== id)

    fs.writeFileSync('favourites.json', JSON.stringify(filteredBooks))
}

module.exports = { getAllFavourites, deleteFavouriteByID, insertFavourite }