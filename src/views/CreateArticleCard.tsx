
export const CreateArticleCard = () => {
  return (
    <section className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg p-6 bg-[var(--card)] border border-[var(--border)]">
      <h1 className="text-2xl font-semibold mb-2 text-center">
        Create New Article ☕
      </h1>

      <form
        hx-post="/article"
        hx-target="#response"
        hx-swap="innerHTML"
        className="flex flex-col space-y-4"
      >
        <div>
          <label className="text-sm text-[var(--muted)] mb-1">
            Title
          </label>
          <input
            name="title"
            type="text"
            required
            className="w-full rounded-xl bg-[var(--nav-item)] 
                        border border-[var(--border)] p-2 focus:outline-none 
                        focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Brewed to perfection..."
          />
        </div>

        <div>
          <label className="text-sm text-[var(--muted)] mb-1">
            Author
          </label>
          <input
            name="author"
            type="text"
            required
            className="w-full rounded-xl bg-[var(--nav-item)] 
                        border border-[var(--border)] p-2 focus:outline-none 
                        focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="John Barista"
          />
        </div>

        <div>
          <label className="text-sm text-[var(--muted)] mb-1">
            Picture Link
          </label>
          <input
            name="image"
            type="url"
            className="w-full rounded-xl bg-[var(--nav-item)] 
                        border border-[var(--border)] p-2 focus:outline-none 
                        focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="https://example.com/coffee.jpg"
          />
        </div>

        <div>
          <label className="text-sm text-[var(--muted)] mb-1">
            Content
          </label>
          <textarea
            name="content"
            rows={5}
            required
            className="w-full rounded-xl bg-[var(--nav-item)] 
                        border border-[var(--border)] p-2 focus:outline-none 
                        focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Share your thoughts about the latest coffee trend..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-xl bg-gradient-to-r from-[var(--accent-light)] to-[var(--accent)] font-semibold opacity-75 hover:opacity-90 transition"
        >
          Publish
        </button>
      </form>

      <div id="response" className="text-center text-[var(--muted)] pt-2 text-sm"></div>
    </section>
  );
}
