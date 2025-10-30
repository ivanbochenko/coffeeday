export default function CreateAccount() {
  return (
    <section className="w-full mx-auto sm:w-[90%] max-w-md rounded-3xl shadow-lg p-8 border border-[var(--border)] bg-[var(--card)]">
			<h1 className="text-2xl font-semibold mb-6 text-center">Create Account</h1>

			<form
					hx-post="/signup"
					hx-target="body"
					hx-swap="none"
					className="flex flex-col gap-4"
			>
					{/* Name */}
					<div>
					<label htmlFor="name" className="block text-sm mb-1 text-[var(--muted)]">
							Name
					</label>
					<input
							type="text"
							id="name"
							name="name"
							required
							placeholder="Your name"
							className="w-full rounded-lg px-4 py-2 bg-[var(--input)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
					/>
					</div>

					{/* Email */}
					<div>
					<label htmlFor="email" className="block text-sm mb-1 text-[var(--muted)]">
							Email
					</label>
					<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="you@example.com"
							className="w-full rounded-lg px-4 py-2 bg-[var(--input)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
					/>
					</div>

					{/* Password */}
					<div>
					<label htmlFor="password" className="block text-sm mb-1 text-[var(--muted)]">
							Password
					</label>
					<input
							type="password"
							id="password"
							name="password"
							required
							placeholder="********"
							className="w-full rounded-lg px-4 py-2 bg-[var(--input)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
					/>
					</div>

					{/* Confirm Password */}
					<div>
					<label htmlFor="confirmPassword" className="block text-sm mb-1 text-[var(--muted)]">
							Confirm Password
					</label>
					<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							required
							placeholder="********"
							className="w-full rounded-lg px-4 py-2 bg-[var(--input)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
					/>
					</div>

					{/* Submit */}
					<button
					type="submit"
					className="mt-4 w-full rounded-lg py-2 font-medium bg-gradient-to-r from-[var(--accent-light)] to-[var(--accent)] opacity-75 hover:opacity-90 transition"
					>
					Sign Up
					</button>

					<p className="text-sm text-center mt-4 text-[var(--muted)]">
					Already have an account?{" "}
					<a
							href="/#"
							className="text-[var(--accent)] hover:underline"
					>
							Log in
					</a>
					</p>
        </form>
    </section>
  );
}
