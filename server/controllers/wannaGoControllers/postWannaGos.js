//Internal dependencies
const { now } = require('mongoose');
const WannaGo = require('../../models/wannaGoModel');

const postWannago = async (ctx) => {
  try {
    const wannaGo = ctx.request.body;
    const storedWannaGo = await WannaGo.create({
      what: wannaGo.what,
      where: wannaGo.where,
      when: wannaGo.when,
      hostId: wannaGo.hostId,
      hostName: wannaGo.hostName,
      dateCreated: wannaGo.dateCreated,
      guestLink: wannaGo.guestLink,
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






module.exports = {postWannago};



