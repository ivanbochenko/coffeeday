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
            <img
              src={article.image || "https://via.placeholder.com/150"}
              alt="Featured Coffee"
              className="w-full h-72 object-cover brightness-75 group-hover:brightness-90 transition"
            />
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
