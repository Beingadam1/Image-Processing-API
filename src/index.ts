import express from "express";
import routes from "./routes/router";

const app = express();
const port = 4000;

app.use("/", routes);
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port:${port}`));

export default app;
