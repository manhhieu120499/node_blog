const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
// 2 middleware xử lý dữ liệu
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    "hbs",
    handlebars.engine({
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// định dạng tuyến đường đi route
// Route initial
route(app);

app.listen(port, () => console.log(`Example for listening at http://localhost:${port}`));
