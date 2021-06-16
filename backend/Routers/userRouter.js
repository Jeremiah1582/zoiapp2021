const router =require('express').Router()

router.get('/login', auth.isDoctor, userController.login)
router.get('/signup', auth.isDoctor, userController.signup)
router.get('/logout', auth.isDoctor, userController.logout)

module.exports= router