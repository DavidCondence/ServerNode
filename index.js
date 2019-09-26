const express = require("express");
const router = require("./routes/router");
const logger = require("./utils/logger");
const emailManager = require("./utils/emailManager");
const uuid = require("uuid");
const app = express();
const port = 8080;
require("./api/persistence/connection/dbconnections");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    const identificador = uuid.v4();
    emailManager.sendMail("sedop@88av.net", `<a href="https://mypage/validate/${identificador}">Hello world</a>`, "Prueba envío correo");
    res.send("Hello world");
});

app.get("/validate/:identificador", (req, res)=>{
    // checo en bd si existe el id y si no esta validado
    // sino esta, lo marcado validado
    // sino, codigo invalido
});

app.use("/", router);

app.listen(port, function(){
    logger.info(`Server running at ${port}`);    
});