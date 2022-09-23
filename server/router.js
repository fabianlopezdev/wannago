const KoaRouter = require('@koa/router');
const {
  getWannaGos,
  getWannaGoById,
  getWannaGoByParams,
} = require('./controllers/wannaGoControllers/getWannaGos');

const {
  postAwannaGo,
  postPplGoing,
} = require('./controllers/wannaGoControllers/postWannaGos');

const router = new KoaRouter();

//GETS
router.get('/wannagos', getWannaGos);
router.get('/wannago/:what/:when', getWannaGoByParams);
router.get('/wannago/:id', getWannaGoById);

//POSTS
router.post('/wannago', postAwannaGo);
router.post('/wannago/ppl_going', postPplGoing);

module.exports = router;

