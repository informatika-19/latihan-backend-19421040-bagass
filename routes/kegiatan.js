const router = require('express').Router()
const kegiatancontroller = require('../controller/kegiatan')
const user = require('../model/user')

router.post('/insert', (reg, res) => {
    usercontroller.create(reg.body)
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})
module.exports = router