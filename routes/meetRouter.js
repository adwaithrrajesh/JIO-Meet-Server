const express = require('express')
const router = express.Router()
const { createMeet } = require('../controller/meetController')


router.post('/createMeet',createMeet)

module.exports = router