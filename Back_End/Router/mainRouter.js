const router = require('express').Router();
const routerProducts = require('./routerProducts');

router.use('/',routerProducts);

module.exports = router