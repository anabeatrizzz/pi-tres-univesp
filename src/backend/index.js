const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var DB = {
    users: [
        {
            id:1,
            name:"Ana",
            email:"ana@ana.com.br",
            password:"1234"
        },
        {
            id:2,
            name:"Allan",
            email:"allan@allan.com.br",
            password:"1234"
        },
        {
            id:3,
            name:"Clovis",
            email:"clovis@clovis.com.br",
            password:"1234"
        },
    ],
    novidades:[
        {
            id:1,
            titulo:"XPTO",
            descricao:"xpto xpto xpto"
        },
        {
            id:2,
            titulo:"XPTO2",
            descricao:"xpto2 xpto2 xpto2"
        },
        {
            id:3,
            titulo:"XPTO3",
            descricao:"xpto3 xpto3 xpto3"
        },


    ]
    
}

app.get("/users",(req,res) => {
    res.json(DB.users);
});

app.get("/novidades",(req,res) =>{
    res.json(DB.novidades);
})
app.listen(8081, () => {
    console.log("API RODANDO COM SUCESSO")
})