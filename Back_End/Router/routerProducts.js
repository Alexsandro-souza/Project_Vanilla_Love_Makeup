const router = require('express').Router();
const productsControllers = require('../Controllers/productsControllers');


router.route('/products').post((req, res)=> productsControllers.create(req, res))

router.route('/products').get((req, res)=> productsControllers.getAll(req, res))

router.route('/products/:id').get((req, res)=>productsControllers.getById(req,res))

router.route('/category/:nameCategory').get((req, res)=>productsControllers.getByCategory(req,res))

router.route('/products/delete/:id').get((req, res)=>productsControllers.deleteById(req,res))

router.route('/products/update/:id').put((req, res)=>productsControllers.updateService(req,res))



module.exports = router;