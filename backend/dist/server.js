"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const PORT = 3333
const HOST = '127.0.0.1'

_app2.default.listen(PORT, () => {
  console.log(`⚡️[POO_MESSAGES]: Server is running at http://${HOST}:${PORT}`)
})
