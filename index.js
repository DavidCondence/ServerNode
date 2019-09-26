const express = require("express");

const app = express();
const router = require("./routes/router");
const port = 8080;

require("./api/persistence/connection/dbconnections");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/", function(req, res){
    res.send("Hello world");
});

app.use("/", router);

app.listen(port, function(){
    console.log(`Server running at ${port}`);
});