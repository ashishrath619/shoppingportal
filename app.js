const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const htmlRoutes = require("./backend/routes/htmlRoutes");
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("views",__dirname+"/client/views");
app.engine("html",require("ejs").renderFile);
app.set("view engine","ejs");
//app.use(express.static(path.resolve(__dirname,"client")));
app.use(express.static(path.resolve(__dirname,"client/assets/css")));
app.use(express.static(path.resolve(__dirname,"client/assets")));
app.use(express.static(path.resolve(__dirname,"client/assets/fonts")));
app.use(express.static(path.resolve(__dirname,"client/assets/images")));
app.use(logger("dev"));
app.use("/",htmlRoutes);
app.set("port",process.env.PORT||3000);
app.listen(app.get("port"),()=>{
    console.log("Application in listening at port 3000");
});



                                                                                           