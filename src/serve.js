import Koa from "koa";
import fn_router from "koa-router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = fn_router();

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

router.get("/", async (ctx, next) => {
  ctx.response.body = "<h1>Index</h1>";
});

app.use(bodyParser());
app.use(router.routes());

app.listen(8000);
console.log("app started at port 8000...");
