
const app = require('./app')
const config = require('./utils/config')
const path = require('path')

// se encarga de redirigir los routes al archivo index.html de mi front
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// })

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})