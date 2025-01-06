const express = require("express")
const bookRoute = require("./routes/BookRoute")
const favouriteRoute = require('./routes/FavouriteRoute')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))

const port = 8000

app.use("/books", bookRoute)
app.use("/favourites", favouriteRoute)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})