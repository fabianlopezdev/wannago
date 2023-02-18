const KoaRouter = require('@koa/router');

//WannGo Controller Functions
const {
  getWannaGos,
  getWannaGoById,
  getWannaGoByParams,
  getAllWannaGosOfUser,
  getWannagoByDateCreated,
} = require('./controllers/wannaGoControllers/getWannaGos');
const {
  postWannago,
} = require('./controllers/wannaGoControllers/postWannaGos');
const { deleteWannaGo } = require('./controllers/wannaGoControllers/deleteWannaGos');
const {
  putPplGoing,
  putSuggestionMsg,
  putOwnerToWannaGo,
  putOpenedTimes,
  putGoingCounter,
  putRejectCounter,
  putSuggestionBoxCounter,
  putGuestLink,
} = require('./controllers/wannaGoControllers/putWannaGos');

//User Controller Functions
const {
  postAuser,
} = require('./controllers/users/postUser');
const { getUserById } = require('./controllers/users/getUser');


const router = new KoaRouter();

//GETS
router.get('/wannagos', getWannaGos);
// router.get('/wannago/:id', getWannaGoById);
router.get('/wannago/:dateCreated', getWannagoByDateCreated);
router.get('/wannagos/owner/:owner', getAllWannaGosOfUser);
router.get('/wannago/:what/:when', getWannaGoByParams);

router.get('/user/:id', getUserById);

//POSTS
router.post('/wannago', postWannago);

router.post('/user', postAuser);

//PUT
router.put('/wannago/ppl_going', putPplGoing);
router.put('/wannago/suggestionMsg', putSuggestionMsg);
router.put('/wannago/owner', putOwnerToWannaGo);
router.put('/wannago/openedTimes', putOpenedTimes);
router.put('/wannago/rejectCounter', putRejectCounter);
router.put('/wannago/goingCounter', putGoingCounter);
router.put('/wannago/suggestionBoxCounter', putSuggestionBoxCounter);
router.put('/wannago/guestLink', putGuestLink);

//DELETE
router.delete('/wannago/delete', deleteWannaGo);

module.exports = router;





















