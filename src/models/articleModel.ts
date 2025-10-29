import { db } from "../db/db";
import { articles } from "../db/schema";
import { eq, desc } from "drizzle-orm";

export async function getAllArticles() {
  return await db.select().from(articles);
}

export async function getArticleById(id: number) {
  const result = await db.select().from(articles).where(eq(articles.id, id));
  return result[0];
}

export async function getLastArticle() {
  const result = await db.select().from(articles).orderBy(desc(articles.createdAt)).limit(1);
  return result[0];
}

export async function createArticle(data: { title: string; content: string; author: string }) {
  await db.insert(articles).values(data);
  return true;
}
export async function deleteArticle(id: number) {
  await db.delete(articles).where(eq(articles.id, id));
  return true;
}