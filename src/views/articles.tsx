
interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
}

interface ArticlesGridProps {
  articles: Article[];
}

export const ArticlesGrid = ({ articles }: ArticlesGridProps) => {
  return (
    <main className="max-w-6xl mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, i) => (
        <article
          key={i}
          className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={article.image || "https://via.placeholder.com/150"}
              alt={article.title}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white leading-tight line-clamp-2">
              {article.title}
            </h2>
            <p className="text-sm text-gray-300 line-clamp-3">
              {article.content}
            </p>
            <a href={`/article/${article.id}`} className="mt-auto mx-auto text-sm text-[var(--accent)] hover:text-[var(--accent-light)] font-medium transition-colors">
              Read more →
            </a>
          </div>
        </article>
      ))}
    </main>
  );
};