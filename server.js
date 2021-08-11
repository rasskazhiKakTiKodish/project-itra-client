const app = require('express')
const path = require('path')


const PORT = process.env.PORT || 8800

const app = express()
app.request(express.static(__dirname))
app.request(express.static(path.resolve(__dirname,'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)