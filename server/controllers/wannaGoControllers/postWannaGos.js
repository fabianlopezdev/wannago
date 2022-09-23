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
    ctx.status = 201;
    ctx.body = pplGoing;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in postAwannaGo function from controllers: ${e}`);
  }
};

module.exports = { postAwannaGo, postPplGoing };

