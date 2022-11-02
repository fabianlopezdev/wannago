//Internal dependencies
const WannaGo = require('../../models/wannaGoModel');

const putPplGoing = async (ctx) => {
  try {
    const { name, email, id } = ctx.request.body;
    const pplGoing = await WannaGo.findByIdAndUpdate(id, {
      $set: {
        [`ppl_going.${name}`]: `${email}`,
      },
    });
    console.log(
      `This name: ${name} and email ${email} was put in the wannaGo: ${pplGoing}`
    );
    ctx.status = 201;
    ctx.body = pplGoing;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putPplGoing function from controllers: ${e}`);
  }
};

const putSuggestionMsg = async (ctx) => {
  try {
    const { name, msg, id } = ctx.request.body;
    const postedMsg = await WannaGo.findByIdAndUpdate(id, {
      $set: { [`suggestion_box.${name}`]: `${msg}`}
      //  { suggestion_box: msg },
    });
    console.log(`This message: ${msg}, of ${name} was put in the wannaGo: ${postedMsg}`);
    ctx.status = 201;
    ctx.body = postedMsg;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putSuggestionMsg function from controllers: ${e}`);
  }
};
const putGuestLink = async (ctx) => {
  try {
    const { id, link } = ctx.request.body;
    console.log('this is id',id);
    console.log('this is the link', link);
    const wannaGoLinked = await WannaGo.findByIdAndUpdate(id, {
      guestLink: link,
    });
    console.log(`Guest link: ${link} of wannaGo: ${wannaGoLinked}`);
    ctx.status = 201;
    ctx.body = wannaGoLinked;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putGuestLink function from controllers: ${e}`);
  }
};



const putOpenedTimes = async (ctx) => {
  try {
    const { id, openedTimes } = ctx.request.body;
    console.log('wannaGoId', id);
    console.log('openedTimes', openedTimes);
    const wannaGoUpdated = await WannaGo.findByIdAndUpdate(id, {
        openedTimes: openedTimes,
      });
    console.log(`This ${wannaGoUpdated} was opened ${wannaGoUpdated.openedTimes} times`);
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putOpenedTimes function from controllers: ${e}`);
  }
};

const putRejectCounter = async (ctx) => {
  try {
    const { id, rejectCounter } = ctx.request.body;
    console.log('wannaGoId', id);
    console.log('rejectCounter:', rejectCounter);
    const wannaGoUpdated = await WannaGo.findByIdAndUpdate(id, {
      rejectCounter: rejectCounter,
    });
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

const putGoingCounter = async (ctx) => {
  try {
    const { id, goingCounter } = ctx.request.body;
    console.log('wannaGoId', id);
    console.log('goingCounter:', goingCounter);
    const wannaGoUpdated = await WannaGo.findByIdAndUpdate(id, {
      goingCounter: goingCounter,
    });
    console.log(`${wannaGoUpdated.goingCounter} people going to ${wannaGoUpdated}`);
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putRejectCounter function from controllers: ${e}`);
  }
};

const putSuggestionBoxCounter = async (ctx) => {
  try {
    const { id, suggestionBoxCounter } = ctx.request.body;
    console.log('wannaGoId', id);
    console.log('suggestionBoxCounter:', suggestionBoxCounter);
    const wannaGoUpdated = await WannaGo.findByIdAndUpdate(id, {
      suggestionBoxCounter: suggestionBoxCounter,
    });
    console.log(
      `${wannaGoUpdated} people made a suggestion to this ${wannaGoUpdated.suggestionBoxCounter}`
    );
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putSuggestionBoxCounter function from controllers: ${e}`);
  }
};


const putOwnerToWannaGo = async (ctx) => {
  try {
    const { wannaGoId, userId } = ctx.request.body;
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

module.exports = { putPplGoing, putSuggestionMsg, putOwnerToWannaGo, putOpenedTimes, putRejectCounter, putGoingCounter, putSuggestionBoxCounter,
putGuestLink };


















