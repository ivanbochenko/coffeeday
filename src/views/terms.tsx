export default function Terms() {
  return (
    <div className="w-full mx-auto sm:w-[90%] max-w-3xl rounded-3xl bg-[var(--card)] p-8 border border-[var(--border)] shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>

        <p className="text-[var(--muted)] mb-4">
            Welcome to CoffeeNews. By accessing or using our website, you agree to comply with and be bound by these Terms of Service. Please read them carefully before using the site.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">1. Use of Service</h2>
        <p className="text-[var(--muted)] mb-4">
            CoffeeNews provides news, articles, and community content related to coffee. You agree to use the service only for lawful purposes and not to disrupt or interfere with its operation.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">2. Content Ownership</h2>
        <p className="text-[var(--muted)] mb-4">
            All content on CoffeeNews, including text, images, and logos, is the property of CoffeeNews or its content creators. You may not copy, distribute, or reuse content without permission.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">3. User Contributions</h2>
        <p className="text-[var(--muted)] mb-4">
            Users may submit articles, comments, or feedback. By doing so, you grant CoffeeNews the right to display and distribute your content as part of the platform.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">4. Disclaimer</h2>
        <p className="text-[var(--muted)] mb-4">
            CoffeeNews provides content “as is.” We make no warranties regarding accuracy, reliability, or availability. Use of the site is at your own risk.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">5. Changes to Terms</h2>
        <p className="text-[var(--muted)] mb-4">
            We may update these Terms of Service from time to time. Continued use of CoffeeNews after changes are posted constitutes acceptance of the revised terms.
        </p>

        <p className="text-[var(--muted)] mt-8">
            If you have any questions about these terms, please{" "}
            <a href="/info/contact" className="text-[var(--accent)] hover:underline">
            contact us
            </a>.
        </p>
    </div>
  );
}
