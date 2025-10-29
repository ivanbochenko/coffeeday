import { Hono } from "hono";
import * as Article from "../controllers/articleController";

const router = new Hono();

router.get("/", Article.showMain);
router.get("/all", Article.showAllArticles);
router.get("/new", Article.createArticleForm);
router.get("/:id", Article.showArticle);
router.post("/", Article.createArticle);
router.delete("/:id", Article.deleteArticle);

export default router;
