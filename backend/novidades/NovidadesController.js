const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const novidades = require("./Novidades");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/novidades",(req,res) =>{
    novidades.findAll({raw: true,order:[
        ['id','DESC']
    ]}).then(novidades => {
        res.json(novidades);
    })
})

app.post("/novidade/create",(req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    novidades.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.statusCode(201);
    });
})

module.exports = app;