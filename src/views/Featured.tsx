interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
}

export default function Featured({ article }: { article: Article }) {
  return (
      <section className="max-w-6xl mx-auto">
        <div className="relative rounded-[28px] overflow-hidden shadow-lg group">
          <a href={`/article/${article.id}`}>
            {article.image ? (
              <img
                src={article.image || "https://via.placeholder.com/150"}
                alt="Featured Coffee"
                className="w-full h-72 object-cover brightness-75 group-hover:brightness-90 transition"
              />
            ) : (
              <img alt="placeholder" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23efefef' rx='8' ry='8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='system-ui, Arial' font-size='28'%3E600%C3%97400%3C/text%3E%3C/svg%3E" />
            )}
            <div className="absolute bottom-0 p-6">
              <h2 className="text-3xl font-semibold text-white">
                  {article.title}
              </h2>
              <p className="mt-2 text-sm max-w-xl">
                {article.content}
              </p>
            </div>
          </a>
        </div>
      </section>
  );
}
