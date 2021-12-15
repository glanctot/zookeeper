const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes.js');
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;