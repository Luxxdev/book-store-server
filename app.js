const express = require("express")
const bookRoute = require("./routes/BookRoute")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))

const port = 8000

app.use("/books", bookRoute)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})