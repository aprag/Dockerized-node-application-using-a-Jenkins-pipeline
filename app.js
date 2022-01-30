const express = require("express");

const app = express();

//displaying hello world
app.get("/", (req, res) => {
   res.send("Hello World");
});

app.listen(5000, () => {
   console.log(`Server running at http://0.0.0.0:5000/`);
});
