const Sequelize = require('sequelize')

const PersonaModel = require('./models/Persona')

const sequelize = new Sequelize('api-agenda','root','',{
    host: 'localhost',
    dialect: 'mysql'|'sqli'|'postgres'|'mssql',
})

const Persona = PersonaModel(sequelize, Sequelize)
sequelize.sync()
.then(()=>{
    console.log('Nuevas Tablas')
})
module.exports={
    Persona
}