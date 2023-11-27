const express = require('express')  // Importa o EXPRESSJS
const app = express()               // Cria um objeto APP poderoso para responder requisições 

require('dotenv').config()          // Configura as variáveis de ambiente.

const driversRouter = require('./routes/drivers.router')    // Importa o módulo 'motorista'

app.use(express.urlencoded({extended: false}))  // Permite receber dados.
app.use(express.json())                         // Permite a troca de dados em JSON.

app.use('/api/v1/drivers', driversRouter)   // Configura a rota BASE do módulo 'motorista'.

const PORT = process.env.PORT || 3000       // Inicia o servidor.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})