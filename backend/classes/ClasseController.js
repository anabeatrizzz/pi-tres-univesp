const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const classe = require("./Classe");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/classe",(req,res) =>{
    classe.findAll({raw: true,order:[
        ['id','DESC']
    ]}).then(classe => {
        res.json(classe);
    })
})

app.post("/classe",(req,res) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    classe.create({
        nome: nome,
        descricao: descricao
    }).then(() =>{
        res.statusCode(201);
    });
})

module.exports = app;