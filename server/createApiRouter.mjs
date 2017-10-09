import KoaRouter from "koa-router"
import axios from "axios"

export default () =>
    new KoaRouter()
        .get("/example", async ctx => {
            ctx.body = { message: "example GET endpoint" }
        })
        .get("/hacker-news", async ctx => {
            try {
                const hnResponse = await axios.get(
                    "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50"
                )
                ctx.body = hnResponse.data
            } catch (error) {
                console.error(error)
                ctx.status = error.response.status
                ctx.body = error.response.data
            }
        })
