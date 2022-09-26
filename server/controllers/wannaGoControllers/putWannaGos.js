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
    const { msg, id } = ctx.request.body;
    const postedMsg = await WannaGo.findByIdAndUpdate(id, {
      $push: { suggestion_box: msg },
    });
    console.log(`This message: ${msg} was put in the wannaGo: ${postedMsg}`);
    ctx.status = 201;
    ctx.body = postedMsg;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in putSuggestionMsg function from controllers: ${e}`);
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

module.exports = { putPplGoing, putSuggestionMsg, putOwnerToWannaGo };

