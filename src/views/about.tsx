export default function About() {
  return (
    <section className="flex flex-col mx-auto">
      <div className="w-full max-w-3xl rounded-3xl bg-[var(--card)] p-8 border border-[var(--border)] shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">About CoffeeNews</h1>
        <p className="text-[var(--muted)] mb-4">
          CoffeeNews is your daily source for everything coffee — from the latest brewing trends to café reviews around the world. Our mission is to bring coffee enthusiasts closer to the perfect cup.
        </p>
        <p className="text-[var(--muted)]">
          Founded in 2025, CoffeeNews is a community-driven platform dedicated to coffee lovers everywhere. Whether you're a barista, a casual drinker, or a coffee scientist, we have something for you!
        </p>
      </div>
    </section>
  );
}
