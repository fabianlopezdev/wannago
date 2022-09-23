const KoaRouter = require('@koa/router');
const {
  getWannaGos,
  postAwannaGo,
  getWannaGoById,
  getWannaGoByParams,
} = require('./controllers/wannaGoController');

const router = new KoaRouter();

router.get('/wannagos', getWannaGos);
router.get('/wannago/:what/:when', getWannaGoByParams);
router.get('/wannago/:id', getWannaGoById);
router.post('/wannago', postAwannaGo)

module.exports = router;




