const WannaGo = require('../../models/wannaGoModel');

const postAwannaGo = async (ctx) => {
  try {
    const wannaGo = ctx.request.body;
    const storedWannaGo = await WannaGo.create({
      what: wannaGo.what,
      where: wannaGo.where,
      when: wannaGo.when,
      owner: wannaGo.owner,
      category: wannaGo.category,
    });
    console.log(`This wannaGo was posted: ${storedWannaGo}`);
    ctx.status = 201;
    ctx.body = storedWannaGo;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in postAwannaGo function from controllers: ${e}`);
  }
};

const postPplGoing = async (ctx) => {
  try {
    const { name, email, id } = ctx.request.body;
    const pplGoing = await WannaGo.findByIdAndUpdate(id, {
      $set: {
        [`ppl_going.${name}`]: `${email}`,
      },
    });
    console.log(
      `This name: ${name} and email ${email} was posted in the wannaGo: ${pplGoing}`
    );
    ctx.status = 201;
    ctx.body = pplGoing;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in postPplGoing function from controllers: ${e}`);
  }
};

const postSuggestionMsg = async (ctx) => {
  try {
    const { msg, id } = ctx.request.body;
    const postedMsg = await WannaGo.findByIdAndUpdate(id, {
      $push: { suggestion_box: msg },
    });
    console.log(`This message: ${msg} was posted in the wannaGo: ${postedMsg}`);
    ctx.status = 201;
    ctx.body = postedMsg;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in postSuggestionMsg function from controllers: ${e}`);
  }
};

module.exports = { postAwannaGo, postPplGoing, postSuggestionMsg };

