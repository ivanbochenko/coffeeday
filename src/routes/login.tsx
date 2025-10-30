import { Hono } from "hono";
import { Layout } from "../views/layout";
import CreateAccount from "../views/createAccount";

const app = new Hono();

app.get("/new", (c) => c.html(
	<Layout>
		<CreateAccount />
	</Layout>
));

export default app;
