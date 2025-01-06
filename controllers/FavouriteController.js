const { getAllFavourites, insertFavourite, deleteFavouriteByID } = require("../services/FavouriteService")

function getFavourites(req, res) {
    try {
        const books = getAllFavourites()
        res.send(books)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function postFavourite(req, res) {
    try {
        const id = req.params.id
        insertFavourite(id)
        res.status(201).send('Livro inserido')
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteFavourite(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteFavouriteByID(id)
            res.status(201).send('Favorito removido')
        }
        else {
            res.status(422).send('Invalid ID')
        }
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getFavourites, postFavourite, deleteFavourite }