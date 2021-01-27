'use strict'

import app from './app'

app.listen(process.env.PORT, () => {
  console.info(`⚡️[MESSAGES]: Server is running at http://${process.env.HOST}:${process.env.PORT}`)
})
