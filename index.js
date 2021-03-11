require("dotenv").config()

const express = require("express")

const server = express()

server.use(express.json())

if(process.env.NODE_ENV === "development"){ // on heroku machine, an env variable is called "NODE_ENV" and has value production
    const cors = require("cors")
    server.use(cors())
}

server.use("*", (req, res) => {
    res.send("<h1>success</h1>")
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})