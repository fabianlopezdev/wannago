const WannaGo = require('../models/wannaGoModel');

const getWannaGos = async (ctx) => {
  try {
    const wannaGos = await WannaGo.find({});
    ctx.status = 201;
    ctx.body = wannaGos;
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getWannaGos function from controllers: ${e}`);
  }
};

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
    console.log(`WannaGo stored in db: ${storedWannaGo}`);
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in postAwannaGo function from controllers: ${e}`);
  }
};

module.exports = {
  getWannaGos,
  postAwannaGo,
};

