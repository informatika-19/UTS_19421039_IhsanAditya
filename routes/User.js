const router = require('express').Router()
const usercontroller = require('../controller/User')

router.post('/register', (req, res) => {
    usercontroller.register(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
        
})

router.post('/login', (req, res) => {
    usercontroller.login(req.body)
    .then (result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getalluser', (req, res) => {
    userController.getAllUser()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })

module.exports = router