const { Router } = require("express")
const { getFavourites, postFavourite, deleteFavourite } = require("../controllers/FavouriteController")

const router = Router()

router.get("/", getFavourites)

router.post("/:id", postFavourite)

router.delete("/:id", deleteFavourite)

module.exports = router