const express = require("express")
const modelServices = require("./models.services")

const router = express.Router()

router.post("/", modelServices.getUserModel)
router.use("*", modelServices.invalidRequest)

module.exports = router
