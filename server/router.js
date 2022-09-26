const KoaRouter = require('@koa/router');
const {
  getWannaGos,
  getWannaGoById,
  getWannaGoByParams,
  getAllWannaGosOfUser,
} = require('./controllers/wannaGoControllers/getWannaGos');

const {
  postAwannaGo,
} = require('./controllers/wannaGoControllers/postWannaGos');

const {
  postAuser,
} = require('./controllers/wannaGoControllers/postUser');

const { getUserById } = require('./controllers/wannaGoControllers/getUser');

const {
  putPplGoing,
  putSuggestionMsg,
  putOwnerToWannaGo,
} = require('./controllers/wannaGoControllers/putWannaGos');

const router = new KoaRouter();

//GETS
router.get('/wannagos', getWannaGos);
router.get('/wannago/:id', getWannaGoById);
router.get('/wannagos/owner/:owner', getAllWannaGosOfUser);
router.get('/wannago/:what/:when', getWannaGoByParams);
router.get('/user/:id', getUserById);

//POSTS
router.post('/wannago', postAwannaGo);
router.post('/user', postAuser);

//PUT
router.put('/wannago/ppl_going', putPplGoing);
router.put('/wannago/suggestionMsg', putSuggestionMsg);
router.put('/wannago/owner', putOwnerToWannaGo);

module.exports = router;










