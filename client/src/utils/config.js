//Add process.env
export const URL = process.env.REACT_APP_KOA_URL;
// export const URL = process.env.REACT_APP_BACKEND_URL;

export const CLIENT_PORT = 3000
;


export const endPoints = {
  delete: process.env.REACT_APP_ENDPOINT_DELETE,
  getUserWannagos: process.env.REACT_APP_ENDPOINT_GET_USER_WANNAGOS,
  getWannagoByDateCreated: process.env.REACT_APP_ENDPOINT_GET_WANNAGO_BY_DATE_CREATED,
  postWannago: process.env.REACT_APP_ENDPOINT_POST_WANNAGO,
  putTrackClick: process.env.REACT_APP_ENDPOINT_PUT_TRACK_CLICK,
  putAddAttendees: process.env.REACT_APP_ENDPOINT_PUT_ADD_ATTENDEES,
  putStoreSuggestions: process.env.REACT_APP_ENDPOINT_PUT_STORE_SUGGESTIONS,
  putIncrementAttendeesCount: process.env.REACT_APP_ENDPOINT_PUT_INCREMENT_ATTENDEES_COUNT,
  putIncrementSuggesionsCount: process.env.REACT_APP_ENDPOINT_PUT_INCREMENT_SUGGESTIONS_COUNT,
  putIncrementRejectionsCount: process.env.REACT_APP_ENDPOINT_PUT_INCREMENT_REJECTIONS_COUNT,
  
}