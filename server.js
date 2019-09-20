const express    = require('express')
const fileUpload = require('express-fileupload')

const app = express()
app.use(fileUpload())

app.post('/upload', (req, res) => {

  if (req.files === null) return res.status(400).json({ msg: 'No file was uploaded' })

  const { file } = req.files

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, error => {
    if (error) {
      console.error(error)
      return res.status(500).send(error)
    }

    res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
  })

})
app.listen(5000, () => console.log('Server started .. '))