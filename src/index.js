const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require("http")
const routes = require('./routes')
const app = express();


var mongoDB = 'mongodb+srv://team_cluster:team123@cluster.cmytt.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors());
app.use(express.json());
app.use(routes);
const server = http.createServer(app);
server.listen(3333);




