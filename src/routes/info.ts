import { Hono } from "hono";
import * as Info from "../controllers/infoController";

const app = new Hono();

app.get("/about", Info.aboutPage);
app.get("/contact", Info.contactPage);
app.get("/terms", Info.termsPage);

export default app;
