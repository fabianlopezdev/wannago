//Internal dependencies
const WannaGo = require('../../models/wannaGoModel');

const postAwannaGo = async (ctx) => {
  try {
    console.log('I am hereee')
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






module.exports = {postAwannaGo};



