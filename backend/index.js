require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app)
const io = require('./chatRoom/socketControllers')

io.attach(server,{
  cors : {
    origin : "http://localhost:5173",
    methods : ['GET', 'POST']
  }
})

const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = require("./database/index");
const developerRouter = require("./developers/devRouter");
const companiesRouter = require("./companies/companiesRouter");
const toyRouter = require("./toy_problems/toyRouter");
const chatRoomRouter = require("./chatRoom/chatRoomRouter");
const { log } = require("console");

app.use("/api/developers", developerRouter);
app.use("/api/companies", companiesRouter);
app.use("/api/toy", toyRouter);

app.use("/api/chatRoom", chatRoomRouter);


server.listen(port, () => {
  console.log("listenning on port :" +' '+port);
});



