import * as express from "express";
import * as path from "path";


const app = express();

const port = 8000;

app.use("/static", express.static(path.join(__dirname, "dist", "static")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "dist", "index.html")));

app.listen(port, () => {
  console.log(`słucham na 127.0.0.1:${port}`);
})