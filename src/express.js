const express = require("express"); const app = express(); app.use(express.static("Dash")); app.listen(80); console.log("Dashboard online at http://localhost:80");
