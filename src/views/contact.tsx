
export default function Contact() {
  return (
    <div className="w-full mx-auto sm:w-[90%] max-w-3xl rounded-3xl bg-[var(--card)] p-8 border border-[var(--border)] shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <p className="text-[var(--muted)] mb-4">
        We’d love to hear from you! Whether you have feedback, suggestions, or just want to say hi, reach out to us.
      </p>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[var(--muted)]">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl p-3 border border-[var(--border)] bg-[var(--input)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-[var(--muted)]">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl p-3 border border-[var(--border)] bg-[var(--input)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-[var(--muted)]">Message</label>
          <textarea
            rows={5}
            placeholder="Your message..."
            className="w-full rounded-xl p-3 border border-[var(--border)] bg-[var(--input)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-vertical"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--accent-light)] to-[var(--accent)] font-semibold opacity-75 hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
