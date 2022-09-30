import WannaGo from '../../models/wannaGoModel';
import { Context } from 'koa';


const putPplGoing = async (ctx: Context) => {
  try {
    const { name, email, id } = ctx.request.body;
    const pplGoing = await WannaGo.findByIdAndUpdate(id, {
      $set: {
        [`ppl_going.${name}`]: `${email}`,
      },
    });
    // tslint:disable-next-line:no-console
    console.log(
      `This name: ${name} and email ${email} was put in the wannaGo: ${pplGoing}`
    );
    ctx.status = 201;
    ctx.body = pplGoing;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in putPplGoing function from controllers: ${e}`);
  }
};

const putGuestLink = async (ctx: Context) => {
  try {
    const { id, link } = ctx.request.body;
    const wannaGoLinked = await WannaGo.findByIdAndUpdate(id, {
      guestLink: link,
    });
    // tslint:disable-next-line:no-console
    console.log(
      `Guest link: ${link} of wannaGo: ${wannaGoLinked}`
    );
    ctx.status = 201;
    ctx.body = wannaGoLinked;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in putGuestLink function from controllers: ${e}`);
  }
};

const putSuggestionMsg = async (ctx: Context) => {
  try {
    const { msg, id } = ctx.request.body;
    const postedMsg = await WannaGo.findByIdAndUpdate(id, {
      $push: { suggestion_box: msg },
    });
    // tslint:disable-next-line:no-console
    console.log(`This message: ${msg} was put in the wannaGo: ${postedMsg}`);
    ctx.status = 201;
    ctx.body = postedMsg;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in putSuggestionMsg function from controllers: ${e}`);
  }
};

const putOpenedTimes = async (ctx: Context) => {
  try {
    const { id, openedTimes } = ctx.request.body;
    const wannaGoUpdated = await WannaGo.findByIdAndUpdate(id, {
        openedTimes,
      });
    // tslint:disable-next-line:no-console
    console.log(`This ${wannaGoUpdated} was opened ${wannaGoUpdated.openedTimes} times`);
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in putOpenedTimes function from controllers: ${e}`);
  }
};

const putRejectCounter = async (ctx: Context) => {
  try {
    const { id, rejectCounter } = ctx.request.body;
    const wannaGoUpdated = await WannaGo.findByIdAndUpdate(id, {
      rejectCounter,
    });
    // tslint:disable-next-line:no-console
    console.log(
      `This ${wannaGoUpdated} was rejected ${wannaGoUpdated.rejectCounter} times`
    );
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in putRejectCounter function from controllers: ${e}`);
  }
};

const putGoingCounter = async (ctx: Context) => {
  try {
    const { id, goingCounter } = ctx.request.body;
    const wannaGoUpdated = await WannaGo.findByIdAndUpdate(id, {
      goingCounter,
    });
    // tslint:disable-next-line:no-console
    console.log(`${wannaGoUpdated.goingCounter} people going to ${wannaGoUpdated}`);
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in putRejectCounter function from controllers: ${e}`);
  }
};

const putSuggestionBoxCounter = async (ctx: Context) => {
  try {
    const { id, suggestionBoxCounter } = ctx.request.body;
    const wannaGoUpdated = await WannaGo.findByIdAndUpdate(id, {
      suggestionBoxCounter,
    });
    // tslint:disable-next-line:no-console
    console.log(
      `${wannaGoUpdated} people made a suggestion to this ${wannaGoUpdated.suggestionBoxCounter}`
    );
    ctx.status = 201;
    ctx.body = wannaGoUpdated;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in putSuggestionBoxCounter function from controllers: ${e}`);
  }
};


const putOwnerToWannaGo = async (ctx: Context) => {
  try {
    const { wannaGoId, userId } = ctx.request.body;
    const wannaGoOwned = await WannaGo.findByIdAndUpdate(wannaGoId, {
      owner: userId,
    });
    // tslint:disable-next-line:no-console
    console.log(
      `The user with id: ${userId} was put in the wannaGo with id: ${wannaGoId}`
    );
    ctx.status = 201;
    ctx.body = wannaGoOwned;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in putOwnertoWananGo function from controllers: ${e}`);
  }
};

export default {
  putPplGoing,
  putSuggestionMsg,
  putOwnerToWannaGo,
  putOpenedTimes,
  putRejectCounter,
  putGoingCounter,
  putSuggestionBoxCounter,
  putGuestLink
};
















