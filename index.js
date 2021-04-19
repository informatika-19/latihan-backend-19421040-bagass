const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
const e = require('express')

mongoose.connect('mongodb://localhost:27017/latihan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then (() => {
    console.log('connected')
}).catch((e)=> {
    console.log(e)
    console.log('unconnected')
})

app.use(bodyParser.json({
    extended: true,
    limit:'20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit:'20mb'
}))

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
    res.send('Username = ' + req.params.username)
})

//reg params
app.get('/daerah/:namadaerah/:id', (req, res) => {
    const namadaerah = req.params.namadaerah
    const idDaerah = req.params.idDaerah
    res.send('Daerah Anda = ' + req.params.namadaerah)
})

//reg body
//app.post('/register', (req, res) => {
    //res.json(req.body)
    //console.log(req.body)
//})
app.use('/user', require('./routes/User'))
app.use('/kegiatan', require('./routes/kegiatan'))

app.listen(3000, () =>{
    console.log('Server Mulai')
})  