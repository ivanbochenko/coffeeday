
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
    <section className="max-w-6xl mx-auto py-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, i) => (
        <article
          key={i}
          className="rounded-3xl bg-[var(--card)] border border-[var(--border)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
        >
          <div className="relative h-48 w-full overflow-hidden rounded-xl">
            {article.image ? (
              <img
                src={article.image || "https://via.placeholder.com/150"}
                alt={article.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <img alt="placeholder" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23efefef' rx='8' ry='8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='system-ui, Arial' font-size='28'%3E600%C3%97400%3C/text%3E%3C/svg%3E" />
            )}
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
    </section>
  );
};