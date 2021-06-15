const router = require('express').Router()
const userController = require('../Controllers/userController')

router.get('/', (req,res)=>{
res.send('HOm€')
})

module.exports= router
