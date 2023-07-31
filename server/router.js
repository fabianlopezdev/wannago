const KoaRouter = require('@koa/router');

//WannGo Controller Functions
const {
  getWannaGos,
  getWannaGoById,
  getWannaGoByParams,
  getUserWannagos,
  getWannagoByDateCreated,
} = require('./controllers/wannaGoControllers/getWannaGos');
const {
  postWannago,
} = require('./controllers/wannaGoControllers/postWannaGos');
const { deleteWannago } = require('./controllers/wannaGoControllers/deleteWannaGos');
const {
  putAddAttendees,
  putStoreSuggestion,
  putWannagoOwner,
  putTrackClick,
  putIncrementAttendeesCount,
  putIncrementRejectionsCount,
  putIncrementSuggestionsCount,
  putInvitationLink,
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
router.get('/wannago/:date-created', getWannagoByDateCreated);
router.get('/wannagos/host-id/:host-id', getUserWannagos);
router.get('/wannago/:what/:when', getWannaGoByParams);

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
router.put('/wannago/invitation-link', putInvitationLink);

//DELETE
router.delete('/wannago/delete', deleteWannago);

module.exports = router;





















