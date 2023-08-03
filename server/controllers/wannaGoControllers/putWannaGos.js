//Internal dependencies
const WannaGo = require('../../models/wannaGoModel');

const putAddAttendees = async (ctx) => {
  try {
    const { name, email, id, hostId } = ctx.request.body;
    const wannago = await WannaGo.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        $set: {
          [`ppl_going.${name}`]: `${email}`,
        },
      },
      { new: true }
    );
    console.log(
      `This name: ${name} and email ${email} was put in the wannaGo: ${wannago}`
    );
    ctx.status = 201;
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putPplGoing function from controllers: ${e}`);
  }
};

const putStoreSuggestion = async (ctx) => {
  try {
    const { name, msg, id, hostId } = ctx.request.body;
    const postedMsg = await WannaGo.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        $set: { [`suggestion_box.${name}`]: `${msg}` },
        //  { suggestion_box: msg },
      }
    );
    console.log(
      `This message: ${msg}, of ${name} was put in the wannaGo: ${postedMsg}`
    );
    ctx.status = 201;
    ctx.body = postedMsg;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putSuggestionMsg function from controllers: ${e}`);
  }
};
const putInvitationLink = async (ctx) => {
  try {
    const { id, link, hostId } = ctx.request.body;
    console.log('this is id', id);
    console.log('this is the link', link);
    const wannaGoLinked = await WannaGo.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        guestLink: link,
      },
      { new: true }
    );
    console.log(`Guest link: ${link} of wannaGo: ${wannaGoLinked}`);
    ctx.status = 201;
    ctx.body = wannaGoLinked;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putGuestLink function from controllers: ${e}`);
  }
};

const putTrackClick = async (ctx) => {
  try {
    const { id, openedTimes, hostId } = ctx.request.body;
    console.log('ctxxx', ctx);
    console.log('wannaGoId', id);
    console.log('openedTimes', openedTimes);
    console.log('owner', hostId);
    const wannaGoUpdated = await WannaGo.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        openedTimes: openedTimes,
      },
      { new: true }
    );
    console.log(
      `This ${wannaGoUpdated} of owner ${wannaGoUpdated.hostId} was opened ${wannaGoUpdated.openedTimes} times`
    );
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putOpenedTimes function from controllers: ${e}`);
  }
};

const putIncrementRejectionsCount = async (ctx) => {
  try {
    const { id, rejectCounter, hostId } = ctx.request.body;
    console.log('wannaGoId', id);
    console.log('rejectCounter:', rejectCounter);
    console.log('hostId', hostId);
    const wannaGoUpdated = await WannaGo.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        rejectCounter: rejectCounter,
      },
      { new: true }
    );
    console.log(
      `This ${wannaGoUpdated} was rejected ${wannaGoUpdated.rejectCounter} times`
    );
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putRejectCounter function from controllers: ${e}`);
  }
};

const putIncrementAttendeesCount = async (ctx) => {
  try {
    const { id, goingCounter, hostId } = ctx.request.body;
    console.log('wannaGoId', id);
    console.log('goingCounter:', goingCounter);
    console.log('hostId', hostId);
    const wannaGoUpdated = await WannaGo.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        goingCounter: goingCounter,
      },
      { new: true }
    );
    console.log(
      `${wannaGoUpdated.goingCounter} people going to ${wannaGoUpdated}`
    );
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putRejectCounter function from controllers: ${e}`);
  }
};

const putIncrementSuggestionsCount = async (ctx) => {
  try {
    const { id, suggestionBoxCounter, hostId } = ctx.request.body;
    console.log('wannaGoId', id);
    console.log('suggestionBoxCounter:', suggestionBoxCounter);
    console.log('hostId', hostId);
    const wannaGoUpdated = await WannaGo.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        suggestionBoxCounter: suggestionBoxCounter,
      },
      { new: true }
    );
    console.log(
      `${wannaGoUpdated} people made a suggestion to this ${wannaGoUpdated.suggestionBoxCounter}`
    );
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(
      `Error in putSuggestionBoxCounter function from controllers: ${e}`
    );
  }
};

const putWannagoOwner = async (ctx) => {
  try {
    const { wannaGoId, userId, hostId } = ctx.request.body;
    const wannaGoOwned = await WannaGo.findByIdAndUpdate(wannaGoId, {
      owner: userId,
    });
    console.log(
      `The user with id: ${userId} was put in the wannaGo with id: ${wannaGoId}`
    );
    ctx.status = 201;
    ctx.body = wannaGoOwned;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putOwnertoWananGo function from controllers: ${e}`);
  }
};

module.exports = {
  putAddAttendees,
  putStoreSuggestion,
  putTrackClick,
  putWannagoOwner,
  putIncrementRejectionsCount,
  putIncrementAttendeesCount,
  putIncrementSuggestionsCount,
  putInvitationLink,
};

