const express = require('express')
const commonMw = require('../middlewares/commonMW')
const jwtService = require('../services/jwtService')
const public = require('./public')
const user = require('./user')

const router = express.Router();

router.use(commonMw);
router.use(jwtService.jwt_MW);

router.get("/", (req, res) => {
  return res.send("Router is working.");
});

router.use("/public", public);
router.use("/user", user);

module.exports = router;
