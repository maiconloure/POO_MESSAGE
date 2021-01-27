import { Request, Response } from 'express'

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '/public/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('*', (req: Request, res: Response) => {
  res.render('index.html')
})

app.listen(process.env.PORT, () => {
  console.info(`Servidor iniciado na port ${process.env.PORT}`)
})
