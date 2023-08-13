import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { HashManager } from './services/HashManager'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`)
})

app.get("/ping", (req, res) => {
    res.send("pong")
})

// const hashManager = new HashManager()
// hashManager.hash("fulano123").then((res) => {
//     console.log(res);

// })