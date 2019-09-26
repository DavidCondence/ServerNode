const mongoose = require("mongoose");

const config = require("../../../config");
 
mongoose.connect(config.mongodb.defaultconnection, {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10
});

mongoose.connection.on("connected", ()=> {
    console.log(`Se contecto perron ${config.mongodb.defaultconnection}`);
});

mongoose.connection.on("error", (err)=> {
    console.log(`Mongoose error ${err}`);
});

mongoose.connection.on("disconected", ()=> {
    console.log(`Mongoose disconected`);
});