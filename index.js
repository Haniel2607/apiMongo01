//configuração inicial
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()

app.listen(3000)
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Primeira rota
app.get('/', (req, res)=>{
    res.json({message: "rodou"})
})

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Conectado!")
    app.listen(3000)
})
.catch((err)=>{
    console.log(err)
})
