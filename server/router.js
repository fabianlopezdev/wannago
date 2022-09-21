const KoaRouter = require('@koa/router');
const {
  getWannaGos,
  postAwannaGo,
} = require('./controllers/wannaGoController');

const router = new KoaRouter();

router.get('/wannaGos', getWannaGos)
router.post('/wannaGo', postAwannaGo)

module.exports = router;

