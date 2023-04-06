const express = require("express");
const app = express();
const path = require("path");

//parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//statics
app.use(express.static(path.join(__dirname, "public")));

//mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testdb");
mongoose.connection.once("open", () => {
  console.log("mongoose connected to db");
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "mongoose error: ")
);

//models
const Product = require("./models/Product.js");

//ejs
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//mvc
const pageController = require("./controllers/pageController.js");

//routers
const pageRoute = require("./routes/pageRoute.js");
const productRoute = require("./routes/productRoute.js");

////////////////////routes////////////////////

app.use("/", pageRoute);

app.get("/products", pageRoute);

app.get("/products/new", pageRoute);

app.post("/products", productRoute);

app.get("/products/:id", productRoute);

//edit product form
app.get("/products/:id/edit", pageRoute);

//edit product form handler
app.put("/products/:id", productRoute);

app.delete("/products/:id", productRoute);

//app listener
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
