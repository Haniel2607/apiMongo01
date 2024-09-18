//configuração inicial
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const Person = require("./models/Person");

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


//Create
app.post("/person", async (req, res) =>{
    const {name, salary, approved} = req.body;

    const person = {
        name,
        salary,
        approved,
    }

    try{
        await Person.create(person)
        res.status(201).json({message: "Pessoa inserida no sistema com sucesso!"})
    } catch (error){
        res.status(500).json({erro: error})
    }
})

// Read
app.get("/person", async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

//Update

//Delete

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Conectado!")
    app.listen(3000)
})
.catch((err)=>{
    console.log(err)
})
