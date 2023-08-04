//Internal dependencies
const Wannago = require('../../models/wannagoModel');

const putAddAttendees = async (ctx) => {
  try {
    const { name, email, id, hostId } = ctx.request.body;
    const wannago = await Wannago.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        $set: {
          [`attendees.${name}`]: `${email}`,
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
    console.log(`Error in putAddAttendees function from controllers: ${e}`);
  }
};

const putStoreSuggestion = async (ctx) => {
  try {
    const { name, msg, id, hostId } = ctx.request.body;
    const wannago = await Wannago.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        $set: { [`suggestions.${name}`]: `${msg}` },
        //  { suggestion_box: msg },
      }
    );
    console.log(
      `This message: ${msg}, of ${name} was put in the wannago: ${wannago}`
    );
    ctx.status = 201;
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putStoreSuggestion function from controllers: ${e}`);
  }
};
const putWannagoLink = async (ctx) => {
  try {
    const { id, link, hostId } = ctx.request.body;
    const wannago = await Wannago.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        link: link,
      },
      { new: true }
    );
    console.log(`Guest link: ${link} of wannaGo: ${wannago}`);
    ctx.status = 201;
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putInvitationLink function from controllers: ${e}`);
  }
};

const putTrackClick = async (ctx) => {
  try {
    const { id, clickCount, hostId } = ctx.request.body;
    const wannago = await Wannago.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        clickCount: clickCount,
      },
      { new: true }
    );
    console.log(
      `This ${wannago} of owner ${wannago.hostId} was opened ${wannago.clickCount} times`
    );
    ctx.status = 201;
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putTrackClick function from controllers: ${e}`);
  }
};

const putIncrementRejectionsCount = async (ctx) => {
  try {
    const { id, rejectionsCount, hostId } = ctx.request.body;
    const wannago = await Wannago.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        rejectionsCount: rejectionsCount,
      },
      { new: true }
    );
    console.log(
      `This ${wannago} was rejected ${wannago.rejectionsCount} times`
    );
    ctx.status = 201;
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(
      `Error in putIncrementREjectionsCount function from controllers: ${e}`
    );
  }
};

const putIncrementAttendeesCount = async (ctx) => {
  try {
    const { id, attendesCount, hostId } = ctx.request.body;
    const wannago = await Wannago.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        attendesCount: attendesCount,
      },
      { new: true }
    );
    console.log(`${wannago.attendesCount} people going to ${wannago}`);
    ctx.status = 201;
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(
      `Error in putIncrementAttendeesCount function from controllers: ${e}`
    );
  }
};

const putIncrementSuggestionsCount = async (ctx) => {
  try {
    const { id, suggestionsCount, hostId } = ctx.request.body;
    const wannago = await Wannago.findOneAndUpdate(
      { dateCreated: id, hostId },
      {
        suggestionsCount: suggestionsCount,
      },
      { new: true }
    );
    console.log(
      `${wannago} people made a suggestion to this ${wannago.suggestionsCount}`
    );
    ctx.status = 201;
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(
      `Error in putIncrementSuggestionsCount function from controllers: ${e}`
    );
  }
};

const putWannagoOwner = async (ctx) => {
  try {
    const { wannaGoId, userId } = ctx.request.body;
    const wannago = await Wannago.findByIdAndUpdate(wannaGoId, {
      hostId: userId,
    });
    console.log(
      `The user with id: ${userId} was put in the wannaGo with id: ${wannaGoId}`
    );
    ctx.status = 201;
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putWannagoOwner function from controllers: ${e}`);
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
  putWannagoLink,
};

