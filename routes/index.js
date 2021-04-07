const router = require('express').Router()

router.use('/api', require('./routes.js'))
router.use('/', require('./htmlRoutes.js'))

module.exports = router