const app = require('express')();
var express = require("express");
const http = require('http').createServer(app);
// const io = require('socket.io')(http);  
const db =require('./config');

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});
var socketMap = [];
http.listen(3000,()=>{
    console.log("listning to port 3000");
});

io.on('connection',(socket)=>{
    console.log("Client Connected");
    socketMap.push(socket);
    dataUpdate();
})


app.post('/chart/create', function (req, res) {
    (async () => {
        try {
            console.log("Calling for chart Create");
            await db.Chart.destroy({
                truncate: true
            });
            let chart = req.body;
            console.log(req.body);
            await db.Chart.create(chart);
            dataUpdate();
            res.json("Charts  Successfully Created");
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    })();
});

async function dataUpdate(){
    console.log('Socket Emmit');
    var charts = await db.Chart.findAll();
    for(let socketMapObj of socketMap){
   if(charts.length > 0){
 socketMapObj.emit('dataUpdate',[charts

        ]);
     } 
   }


}