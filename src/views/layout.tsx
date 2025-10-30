import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
  const css = `:root {
        --border: rgba(255,255,255,0.05);
        --bg: #15171b;     /* lighter page background */
        --card: #1c1e22;   /* brighter, smoother card tone */
        --nav-item: rgba(255, 255, 255, 0.05);
        --nav-item-hover: rgba(255, 255, 255, 0.2);
        --accent: #6fb3ff;
        --accent-light: #4dd0e1;
        --muted: #888888;
        --input: var(--nav-item);

      }
      html,body { background: var(--bg); }`
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Coffeeday</title>
        {/* HTMX */}
        <script src="https://unpkg.com/htmx.org@2.0.3"></script>
        {/* Tailwind CDN (for quick prototyping) */}
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{css}</style>
      </head>
      <body class="flex flex-col min-h-screen antialiased text-white font-inter">
        <Navbar />
        {/* MAIN */}
        <main class="flex flex-col items-start flex-grow py-8 space-y-8">
          { props.children }
        </main>
        <Footer />
      </body>
    </html>
  )
}

const Navbar = () => (
  <nav class="sticky top-0 z-50 backdrop-blur-md w-full">
    <div class="max-w-6xl mx-auto py-4 flex items-center justify-between gap-6">
      {/* left: logo */}
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent)] flex items-center justify-center font-extrabold text-black">
          C
        </div>
        <div class="hidden sm:block">
          <div class="text-sm text-gray-300 font-semibold">COFFEEDAY</div>
          <div class="text-xs text-[var(--muted)] -mt-0.5">beta</div>
        </div>
      </div>

      {/* center: nav items */}
      <div class="hidden md:flex items-center gap-6">
        <a href="/article" class="flex items-center gap-2 py-2 px-3 rounded-full bg-[var(--nav-item)] hover:bg-[var(--nav-item-hover)] transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z"/></svg>
          <span class="text-sm text-gray-200">Home</span>
        </a>

        <a href="/article/new" class="flex items-center gap-2 py-2 px-3 rounded-full bg-[var(--nav-item)] hover:bg-[var(--nav-item-hover)] transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="text-sm text-gray-200">Add Article</span>
        </a>

        <button class="flex items-center gap-2 py-2 px-3 rounded-full bg-[var(--nav-item)] hover:bg-[var(--nav-item-hover)] transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 8v4l3 3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="text-sm text-gray-200">Earnings</span>
        </button>
      </div>

      {/* right: profile / actions */}
      <div class="flex items-center gap-3">
        <button class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--nav-item)] hover:bg-[var(--nav-item-hover)] transition text-sm">
          Create account
        </button>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-[linear-gradient(135deg,var(--accent-light),var(--accent))] flex items-center justify-center text-black font-bold">DK</div>
        </div>
      </div>
    </div>
  </nav>
)

const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--border)] text-[var(--muted)] mt-6">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-medium">CoffeeDay</span>.  
          Brewed fresh daily ☕
        </p>

        <div className="flex items-center gap-4 text-sm">
          <a href="/info/about" className="hover:text-[var(--accent)] transition">
            About
          </a>
          <a href="/info/contact" className="hover:text-[var(--accent)] transition">
            Contact
          </a>
          <a href="/info/terms" className="hover:text-[var(--accent)] transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}