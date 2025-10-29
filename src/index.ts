import { Hono } from 'hono'
import article from "./routes/article";
const app = new Hono()

app.get('/', async (c) => {
  return c.redirect('/article');
})

app.route("/article", article);

export default {
  port: 3000,
  fetch: app.fetch,
}