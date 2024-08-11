const express= require('express');
const bodyPraser= require('body-parser');

const  connect = require("./config/database");
const { PORT }= require('./config/server-config');

const app=express();

app.listen(PORT,  async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await connect();
    console.log("mongodb connected");
})