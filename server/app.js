const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// mount parser for applicaton/json content
app.use(bodyParser.json({ limit: "1mb" }))

/*
 * API endpoints
 */
app.get("/api/example", (req, res) => {
    res.send({ message: "example GET endpoint" })
})

// reroute all frontend routes to be handled by react-router
const viewingRoutes = ["/"]
viewingRoutes.forEach(route => {
    app.get(route, (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "app", "public", "dist", "index.html")
        )
    })
})

// mount static frontend to express
app.use(express.static(path.join(__dirname, "..", "app", "public")))

// Start the app
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
})
