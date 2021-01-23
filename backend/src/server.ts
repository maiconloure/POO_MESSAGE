import app from './app'

const PORT = 3333
const HOST = '127.0.0.1'

app.listen(PORT, () => {
  console.info(`⚡️[OOP_MESSAGES]: Server is running at http://${HOST}:${PORT}`)
})
