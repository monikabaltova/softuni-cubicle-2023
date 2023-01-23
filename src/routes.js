const router = require('express').Router();

const cubeController = require('./controllers/cubController');
const homeController = require('./controllers/homeController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

//router.get('/create', (req, res) => {
//    res.render('create');
//});
router.get('./create',cubeController.getCreateCube);

module.exports = router;