interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
  createdAt: string;
  author: string | null;
}

export default function ArticlePage({ article }: { article: Article }) {
  return (
    <main
      className="min-h-screen text-white px-6 py-12 flex justify-center"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <article className="max-w-3xl w-full bg-[var(--card)] rounded-[28px] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.05)]">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-semibold leading-tight mb-3">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
            <span>by <span className="text-white">{article.author ?? 'Kaligorsky'}</span></span>
            <span>•</span>
            <span>{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
        </header>

        {/* Featured image */}
        <div className="rounded-[24px] overflow-hidden mb-10">
          {
            article.image ? 
              <img
                src={article.image || 'https://via.placeholder.com/600x400'}
                alt="Coffee brewing"
                className="w-full h-80 object-cover brightness-95 hover:brightness-100 transition"
              />
            :
              <img alt="placeholder" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23efefef' rx='8' ry='8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='system-ui, Arial' font-size='28'%3E600%C3%97400%3C/text%3E%3C/svg%3E" />
          }
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none leading-relaxed">
            {formatTextWithQuote(article.content)}
        </div>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between text-sm text-[var(--muted)]">
          <span>☕ Brewed with care</span>
          <a
            href="javascript:window.history.back();"
            className="text-[var(--accent)] hover:underline"
          >
            Back to articles
          </a>
        </footer>
      </article>
    </main>
  );
}

function formatTextWithQuote(text: string) {
  // Split into sentences
  const sentences = text.match(/[^.!?]+[.!?]/g) || [text];

  // Find shortest sentence
  const shortestIndex = sentences.reduce(
    (shortest, s, i, arr) => (s.length < arr[shortest].length ? i : shortest),
    0
  );

  // Mark the quote sentence
  const sentencesWithQuote = sentences.map((s, i) =>
    i === shortestIndex ? <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic text-white">{'“' + s.trim() + '”'}</blockquote> : <p>{s.trim()}</p>
  );
  return sentencesWithQuote
}


