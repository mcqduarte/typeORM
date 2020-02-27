const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const sequelize = require('sequelize')

app.get('/personas',(req, res)=>{
    Persona.findAll()
    .then(personas =>{
        res.send(personas)
    })
})
app.get('/personas/nuevo',(req, res)=>{
    console.log(req.body)
    personalbar.create({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono
    }).then(persona =>{
        res.send('persona creada')
    })
})
app.get('/personas/:id',(req, res)=>{
    let personaId = req.params.id
    Persona.findOne({where:{id:personaId}})
    .then(persona =>{
        res.json(persona)
    })
})
app.put('/personas/:id', (req, res)=>{
    let personaId = req.params.id
    let nuevosDatos = req.body
    Persona.findOne({where:{id: personaId}})
        .then(persona =>{
            persona.update(nuevosDatos)
                .then(nuevosDatos =>{
                    res.json(nuevapersona)
                })
        })
})
app.delete('/personas/:id', (req, res)=>{
    let personaId = req.params.id

    Persona.destroy({
        where: {id: personaId}
    }).then(()=>{
        res.send('persona elminada')
    })
    res.send('DELETE/personas/:id')
})
app.listen(port, ()=>{
    console.log('Escuchando en el puerto ${port}')
})