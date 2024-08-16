const express= require('express');
const bodyParser= require('body-parser');

const  connect = require("./config/database");
const { PORT }= require('./config/server-config');
const { UserService }= require("./services/index");
const User = require('./models/user-model');
const apiRoutes = require("./routes/index");

const app=express();
const CategoryRepository= require("./repository/category-repository");
const Category = require('./models/category-model');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT,  async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await connect();
    console.log("mongodb connected");
});