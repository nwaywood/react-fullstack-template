const Koa = require("koa")
const koaStatic = require("koa-static")
const koaBodyParser = require("koa-bodyparser")
const KoaRouter = require("koa-router")
const koaSend = require("koa-send")
const path = require("path")
const createApiRouter = require("./createApiRouter")

const app = new Koa()
const router = new KoaRouter()

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// mount static frontend to express
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
    await koaSend(ctx, path.join(__dirname, "..", "dist", "index.html"))
})

app.use(router.routes())

// Start the app
app.listen(HTTP_PORT)
console.log(`Listening on port ${HTTP_PORT}`)
