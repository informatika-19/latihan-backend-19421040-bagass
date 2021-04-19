const router = require('express').Router()
const usercontroller = require('../controller/user')

router.post('/register', (req, res) => {
    usercontroller.register(req.body)
    .then((result) =>{
        res.json(result)
    }).catch(err =>{
        res.json(err)
    })
})
 router.post('/login', (req, res) => {
     usercontroller.login(req.body)
    .then((result) =>{
         res.json(result)
    }).catch(err =>{
        res.json(err)
    })

 })
module.exports = router