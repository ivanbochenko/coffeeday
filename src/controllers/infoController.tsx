import { Layout } from "../views/layout"
import About from "../views/about"
import Contact from "../views/contact"
import Terms from "../views/terms"

export async function aboutPage(c) {
  const html = c.html(
    <Layout>
      <About />
    </Layout>
  )
  return html
}

export async function contactPage(c) {
  const html = c.html(
    <Layout>
      <Contact />
    </Layout>
  )
	return html
}

export async function termsPage(c) {
  const html = c.html(
    <Layout>
      <Terms />
    </Layout>
  )
  return html
}