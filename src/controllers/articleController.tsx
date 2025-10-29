import * as Article from "../models/articleModel";
import ArticlePage from "../views/article";
import { ArticlesGrid } from "../views/articles";
import { CreateArticleCard } from "../views/CreateArticleCard";
import Featured from "../views/Featured";
import { Layout } from "../views/layout";

export async function showAllArticles(c) {
  const all = await Article.getAllArticles();
  const html = c.html(
    <Layout>
      <ArticlesGrid articles={all} />
    </Layout>
  )
  return html
}

export async function showArticle(c) {
  const id = Number(c.req.param("id"));
  const article = await Article.getArticleById(id);

  if (!article) {
    return c.html();
  }

  return c.html(<Layout><ArticlePage article={article} /></Layout>);
}

export async function createArticleForm(c) {
  return c.html(
    <Layout>
      <CreateArticleCard />
    </Layout>
  );
}

export async function createArticle(c) {
  const body = await c.req.parseBody();
  
  await Article.createArticle({
    title: body.title,
    content: body.content,
    author: body.author,
  });

  return c.html(
    <div className="text-green-500 font-semibold">
      Article created successfully! ☕
    </div>
  );
}

export async function deleteArticle(c) {
  const id = Number(c.req.param("id"));
  await Article.deleteArticle(id);
  
  return c.html(
    <div className="text-red-500 font-semibold">
      Article deleted successfully! ☕
    </div>
  );
}

export async function showMain(c) {
  const article = await Article.getLastArticle();
  const all = await Article.getAllArticles();
    
  // Merge without duplication
  const uniqueArticles = [ ...all.filter(obj => obj.id !== article.id)];

  return c.html(
    <Layout>
      <Featured article={article} />
      <ArticlesGrid articles={uniqueArticles} />
    </Layout>
  )
}
