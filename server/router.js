const KoaRouter = require('@koa/router');

//WannGo Controller Functions
const {
  // getWannaGos,
  getWannagoById,
  getWannagoByParams,
  getUserWannagos,
  getWannagoByDateCreated,
} = require('./controllers/wannaGoControllers/getWannagos');
const {
  postWannago,
} = require('./controllers/wannaGoControllers/postWannagos');
const { deleteWannago } = require('./controllers/wannaGoControllers/deleteWannagos');
const {
  putAddAttendees,
  putStoreSuggestion,
  putWannagoOwner,
  putTrackClick,
  putIncrementAttendeesCount,
  putIncrementRejectionsCount,
  putIncrementSuggestionsCount,
  putWannagoLink,
} = require('./controllers/wannaGoControllers/putWannagos');

//User Controller Functions
const {
  postAuser,
} = require('./controllers/users/postUser');
const { getUserById } = require('./controllers/users/getUser');


const router = new KoaRouter();

//GETS
// router.get('/wannagos', getWannagos);
// router.get('/wannago/:id', getWannaGoById);
router.get('/wannago/:dateCreated', getWannagoByDateCreated);
router.get('/wannagos/host-id/:hostId', getUserWannagos);
router.get('/wannago/:what/:when', getWannagoByParams);

router.get('/user/:id', getUserById);

//POSTS
router.post('/wannago', postWannago);

router.post('/user', postAuser);

//PUT
router.put('/wannago/attendees', putAddAttendees);
router.put('/wannago/suggestion', putStoreSuggestion);
router.put('/wannago/wannago-owner', putWannagoOwner);
router.put('/wannago/click', putTrackClick);
router.put('/wannago/rejections-count', putIncrementRejectionsCount);
router.put('/wannago/attendees-count', putIncrementAttendeesCount);
router.put('/wannago/suggestions-count', putIncrementSuggestionsCount);
router.put('/wannago/invitation-link', putWannagoLink);

//DELETE
router.delete('/wannago/delete', deleteWannago);

module.exports = router;





















