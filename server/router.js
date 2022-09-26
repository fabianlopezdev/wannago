const KoaRouter = require('@koa/router');
const {
  getWannaGos,
  getWannaGoById,
  getWannaGoByParams,
} = require('./controllers/wannaGoControllers/getWannaGos');

const {
  postAwannaGo,
} = require('./controllers/wannaGoControllers/postWannaGos');

const {
  putPplGoing,
  putSuggestionMsg
} = require('./controllers/wannaGoControllers/putWannaGos');

const router = new KoaRouter();

//GETS
router.get('/wannagos', getWannaGos);
router.get('/wannago/:id', getWannaGoById);
router.get('/wannago/:what/:when', getWannaGoByParams);

//POSTS
router.post('/wannago', postAwannaGo);

//PUT
router.put('/wannago/ppl_going', putPplGoing);
router.put('/wannago/suggestionMsg', putSuggestionMsg);

module.exports = router;


