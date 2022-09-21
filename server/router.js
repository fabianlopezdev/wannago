const KoaRouter = require('@koa/router');
const {
  getWannaGos,
  postAwannaGo,
} = require('./controllers/wannaGoController');

const router = new KoaRouter();

router.get('/wannagos', getWannaGos)
router.post('/wannago', postAwannaGo)

module.exports = router;

