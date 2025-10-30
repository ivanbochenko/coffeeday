import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const articles = sqliteTable("articles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: text("created_at").default(sql`(current_timestamp)`).notNull(),
  image: text("image"),
  author: text("author"),
});
