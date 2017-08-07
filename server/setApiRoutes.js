const express = require("express")
const axios = require("axios")

module.exports = function setApiRoutes(parentRouter) {
    const router = express.Router()
    parentRouter.use("/api", router)

    router.get("/example", (req, res) => {
        res.send({ message: "example GET endpoint" })
    })

    router.get("/hacker-news", (req, res) => {
        axios
            .get(
                "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50"
            )
            .then(response => {
                res.send(response.data)
            })
            .catch(error => {
                console.error(error)
                res.status(error.response.status).send(error.response.data)
            })
    })
}
