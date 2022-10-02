import express from "express";
import cors from "cors"
const app = express();
import { urlencoded, json } from "body-parser";

app.use(cors());
app.use(urlencoded({extended:false}));
app.use(json());

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
});

app.post("/novidades", (req,res) => {
    let {titulo,descricao} = req.body;
    DB.novidades.push({
        id:4,
        titulo,
        descricao
    });

    res.sendStatus(201);
})
app.listen(8081, () => {
    console.log("API RODANDO COM SUCESSO")
})