require("dotenv").config()
const path = require("path")
const express = require("express")

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, "client/build")))

if(process.env.NODE_ENV === "development"){ // on heroku machine, an env variable is called "NODE_ENV" and has value production
    const cors = require("cors")
    server.use(cors())
}

// our api comes earlier in the pipeline
server.get("api/hello", (req, res) => {
    res.json({ message: "hello" })
})

// catch all that will send back to index.html
server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})