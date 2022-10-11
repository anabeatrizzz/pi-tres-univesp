const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require("./User");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/users",(req,res) =>{
    user.findAll({raw: true,order:[
        ['id','DESC']
    ]}).then(users => {
        res.json(users);
    })
})


app.post("/user/create",(req,res) => {
    var email = req.body.email;
    var senha = req.body.senha;
    user.create({
        email: email,
        senha: senha
    }).then(() =>{
        res.json({email,senha});
    });
})

module.exports = app;