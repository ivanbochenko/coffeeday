import { Hono } from "hono";
import * as Article from "../controllers/articleController";

const router = new Hono();

router.get("/", Article.showMain);
router.get("/all", Article.showAllArticles);
router.get("/:id", Article.showArticle);
router.post("/", Article.createArticle);

export default router;
