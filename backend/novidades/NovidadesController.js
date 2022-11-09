const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const novidades = require("./Novidades");
const { where } = require("sequelize");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/novidades",(req,res) =>{
    novidades.findAll({raw: true,order:[
        ['id','DESC']
    ]}).then(novidades => {
        res.json(novidades);
    })
})

app.post("/novidades",(req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    novidades.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.statusCode(201);
    });
});

app.put("/novidade/:id",(req,res) => {
   var id = parseInt(req.params.id);
   var titulo = req.body.titulo;
   console.log(titulo);
  novidades.update({titulo:titulo},{where:{id:id}}).then(data => {
    console.log(data);
    res.sendStatus(200);
   });
});

module.exports = app;