import Koa from "koa"
import koaStatic from "koa-static"
import koaBodyParser from "koa-bodyparser"
import KoaRouter from "koa-router"
import koaSend from "koa-send"
import path from "path"
import createApiRouter from "./createApiRouter"

const app = new Koa()
const router = new KoaRouter()

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// mount static frontend to koa
app.use(koaStatic(path.join(__dirname, "..", "dist")))

// mount parser for applicaton/json content
app.use(koaBodyParser())

/*
 * API endpoints
 */
const apiRouter = createApiRouter()
router.use("/api", apiRouter.routes(), apiRouter.allowedMethods())

// reroute all frontend routes to be handled by react-router
router.get("*", async ctx => {
    await koaSend(ctx, "dist/index.html")
})

app.use(router.routes())

// Start the app
app.listen(HTTP_PORT)
console.log(`Listening on port ${HTTP_PORT}`)
