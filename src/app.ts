import * as express from "express";
import * as string from "./strings";

const app = express();
const port = 8080;

app.get("/", (req, res) => res.send(string.HELLO_WORLD));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
