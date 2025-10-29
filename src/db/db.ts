import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database("app.db", { create: true, strict: true });
sqlite.exec("PRAGMA journal_mode = WAL;");
export const db = drizzle(sqlite);
