import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;
const publicDir = path.join(__dirname, "public");

app.set("view engine", "ejs");
app.set("views", publicDir);
app.use(express.static(publicDir, { index: false }));

const isDev = process.env.NODE_ENV !== "production";

app.get("/", (req, res) => {
  res.render("index", { page: "", liveReload: isDev });
});

app.get("/:name", (req, res) => {
  res.render("index", { page: req.params.name, liveReload: isDev });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
