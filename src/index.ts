import { Hono } from 'hono'
import article from "./routes/article";
import info from "./routes/info";
import login from "./routes/login";

const app = new Hono()

app.get('/', async (c) => {
  return c.redirect('/article');
})

app.route("/article", article);
app.route("/info", info);
app.route("/login", login);

export default {
  port: 3000,
  fetch: app.fetch,
}