const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// mount static frontend to express
app.use(express.static(path.join(__dirname, "..", "dist")))

// mount parser for applicaton/json content
app.use(bodyParser.json({ limit: "1mb" }))

/*
 * API endpoints
 */
app.get("/api/example", (req, res) => {
    res.send({ message: "example GET endpoint" })
})

// reroute all frontend routes to be handled by react-router
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
})

// Start the app
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
})
